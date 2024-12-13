using OrganizationOfCompanies.API.Models;

namespace OrganizationOfCompanies.API.Application.InterfacesServices
{
    public interface IEventService
    {
        Task<IEnumerable<EventViewModel>> GetAllEvent();
        Task<EventViewModel> GetEventbyId(int eventId);
        Task<bool> AddEvent(EventViewModel eventView);
        Task<bool> UpdateEvent(EventViewModel eventView);
        Task<bool> DeletarEvent(int eventId);
        Task<IEnumerable<EventViewModel>> GetUserEvents(int userId);
    }
}
