using Dapper;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OrganizationOfCompanies.API.DataContext;
using OrganizationOfCompanies.API.Models;
using OrganizationOfCompanies.API.Repository.InterfacesRepository;
using System.Text;

namespace OrganizationOfCompanies.API.Repository.RepositoryService
{
    public class UserRepository : IUserRepository
    {
        private StringBuilder _sql;
        private readonly AppDbContext _context;
        public UserRepository(AppDbContext context)
        {
            _context = context;
            _sql = new StringBuilder();
        }

        public async Task<bool> AddUser(UserViewModel userView)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"INSERT INTO public.Users (email, ""name"", ""password"", yearsofage, cpf, city, state, address, category, membershipdate) values
                                ('{userView.Email}', '{userView.Name}', '{userView.Password}', {userView.YearsOfAge}, '{userView.Cpf}', '{userView.City}', '{userView.State}', '{userView.Address}', {userView.Category}, now());");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao criar um usuário");
            }
        }

        public async Task<bool> DeletarUser(int userId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"DELETE FROM public.users WHERE id={userId};");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao criar um usuário");
            }
        }

        public async Task<UserViewModel> GetUserbyId(int userId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"SELECT id, email, ""name"", yearsofage, cpf, city, state, address, category, membershipdate FROM public.users where id = {userId};");

                var result = await conn.QueryFirstOrDefaultAsync<UserViewModel>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao criar um usuário");
            }
        }

        public async Task<bool> UpdateUser(UserViewModel userView)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"UPDATE public.users SET 
                                            email='{userView.Email}', 
                                            ""name""='{userView.Name}', 
                                            ""password""='{userView.Password}', 
                                            yearsofage={userView.YearsOfAge}, 
                                            cpf='{userView.Cpf}', 
                                            city='{userView.City}', 
                                            state='{userView.State}', 
                                            address='{userView.Address}', 
                                            category={userView.Category}
                                            WHERE id={userView.Id};");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao modificar as informações do usuário");
            }
        }

        public async Task<IEnumerable<UserViewModel>> GetAllUser()
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"SELECT id, email, ""name"", yearsofage, cpf, city, state, address, category, membershipdate FROM public.users;");

                var result = await conn.QueryAsync<UserViewModel>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao criar um usuário");
            }
        }

        #region Criar Registro de usuário em um evento
        public async Task<bool> PostRegistration(int userId, int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"INSERT INTO public.userevent (userid, eventid, startdate) values
                                ({userId}, {eventId}, now());");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao inscrever um usuário a um evento");
            }
        }
        public async Task<int> UserQuantityEvent(int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"SELECT count(u.userid) FROM userevent u where u.eventid = {eventId};");

                var result = await conn.QueryFirstOrDefaultAsync<int>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao verificar quantos usários tem no evento");
            }
        }
        public async Task<int> VacanciesQuantityEvent(int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append(@$"select e.vacancies from events e where e.id = {eventId};");

                var result = await conn.QueryFirstOrDefaultAsync<int>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao verificar quantos usários tem no evento");
            }
        }
        #endregion

        #region Desfazendo registro de usuário em um evento
        public async Task<bool> PostregistrationClosure(int userId, int eventId)
        {
            try
            {
                using var conn = _context.OpenConnection();

                _sql.Clear();
                _sql.Append($@"DELETE FROM public.userevent WHERE userid = {userId} and eventid = {eventId};");

                var result = await conn.ExecuteAsync(sql: _sql.ToString());

                return result > 0;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao defazer a inscrição de um usuário a um evento");
            }
        }
        #endregion

        #region Login
        public async Task<int> GetIdUser(string email)
        {
            try
            {
                using var conn = _context.OpenConnection();
                _sql.Clear();
                _sql.Append($@"select u.id from users u where u.email = '{email}';");

                var result = await conn.QueryFirstOrDefaultAsync<int>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao verificar email.");
            }
        }

        public async Task<string> GetSenhaUser(int userId)
        {
            try
            {
                using var conn = _context.OpenConnection();
                _sql.Clear();
                _sql.Append($@"select u.""password"" from users u where u.id = {userId};");

                var result = await conn.QueryFirstOrDefaultAsync<string>(sql: _sql.ToString());

                return result;
            }
            catch (Exception)
            {
                throw new Exception("Erro ao verifcar senha.");
            }
        }
        #endregion
    }
}
