using OrganizationOfCompanies.API.Application.InterfacesServices;
using OrganizationOfCompanies.API.Models;
using OrganizationOfCompanies.API.Repository.InterfacesRepository;

namespace OrganizationOfCompanies.API.Application.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;
        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<bool> AddEvent(EventViewModel eventView)
        {
            EventViewModel events = new EventViewModel(
                eventView.Id,
                eventView.Title,
                eventView.LocationOfTheActivity,
                eventView.TypeEvent,
                eventView.Vacancies,
                eventView.EventEndDate,
                eventView.EventEndDate);

            var result = await _eventRepository.AddEvent(events);

            return result;

        }

        public async Task<bool> DeletarEvent(int eventId)
        {
            return await _eventRepository.DeletarEvent(eventId);
        }

        public async Task<IEnumerable<EventViewModel>> GetAllEvent()
        {
            return await _eventRepository.GetAllEvent();
        }

        public async Task<EventViewModel> GetEventbyId(int eventId)
        {
            return await _eventRepository.GetEventbyId(eventId);
        }

        public async Task<IEnumerable<EventViewModel>> GetUserEvents(int userId)
        {
            return await _eventRepository.GetUserEvents(userId);
        }

        public async Task<bool> UpdateEvent(EventViewModel eventView)
        {
            EventViewModel events = new EventViewModel(
                eventView.Id,
                eventView.Title,
                eventView.LocationOfTheActivity,
                eventView.TypeEvent,
                eventView.Vacancies,
                eventView.EventEndDate,
                eventView.EventEndDate);

            var result = await _eventRepository.UpdateEvent(events);

            return result;
        }
    }
}
