using Dapper;
using Microsoft.Extensions.Logging;
using OrganizationOfCompanies.API.DataContext;
using OrganizationOfCompanies.API.Models;
using OrganizationOfCompanies.API.Repository.InterfacesRepository;
using System.Text;

namespace OrganizationOfCompanies.API.Repository.RepositoryService
{
    public class EventRepository : IEventRepository
    {
        private StringBuilder _sql;
        private readonly AppDbContext _context;
        public EventRepository(AppDbContext context)
        {
            _context = context;
            _sql = new StringBuilder();
        }

        public async Task<bool> AddEvent(EventViewModel eventView)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$" INSERT INTO public.events (title, locationoftheactivity, typeevent, eventstartdate, eventenddate, vacancies) values
                                ('{eventView.Title}', '{eventView.LocationOfTheActivity}', {eventView.TypeEvent}, '{eventView.EventStartDate}', '{eventView.EventEndDate}', {eventView.Vacancies});");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao criar um evento");
            }
        }

        public async Task<bool> DeletarEvent(int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"DELETE FROM public.events WHERE id={eventId};");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao deletar evento");
            }
        }

        public async Task<IEnumerable<EventViewModel>> GetAllEvent()
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"SELECT 
                                id,
                                title as Title, 
                                locationoftheactivity as LocationOfTheActivity, 
                                typeevent as TypeEvent, 
                                vacancies as Vacancies, 
                                eventstartdate as EventStartDate, 
                                eventenddate as EventEndDate 
                                FROM public.events e where e.eventenddate > now() ;");

                var result = await conn.QueryAsync<EventViewModel>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao obter eventos");
            }
        }

        public async Task<EventViewModel> GetEventbyId(int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"SELECT id, title, locationoftheactivity, typeevent, eventstartdate, eventenddate, vacancies FROM public.events where id = {eventId};");

                var result = await conn.QueryFirstOrDefaultAsync<EventViewModel>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao obter evento");
            }
        }

        public async Task<bool> UpdateEvent(EventViewModel eventView)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"UPDATE public.events SET 
                                                title='{eventView.Title}', 
                                                locationoftheactivity='{eventView.LocationOfTheActivity}', 
                                                typeevent={eventView.TypeEvent},
                                                vacancies={eventView.Vacancies}
                                                eventstartdate='{eventView.EventStartDate}', 
                                                eventenddate='{eventView.EventEndDate}' 
                                                WHERE id={eventView.Id};");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao modificar evento");
            }
        }

        public async Task<IEnumerable<EventViewModel>> GetUserEvents(int userId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"select 
                                e.id,
                                e.title as Title, 
                                e.locationoftheactivity as LocationOfTheActivity, 
                                e.typeevent as TypeEvent, 
                                e.vacancies as Vacancies, 
                                e.eventstartdate as EventStartDate, 
                                e.eventenddate as EventEndDate   
                                from events e 
                                inner join userevent u on e.id = u.eventid 
                                where u.userid = {userId} and e.eventenddate > now();");

                var result = await conn.QueryAsync<EventViewModel>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao obter eventos do usuário.");
            }
        }

    }
}
