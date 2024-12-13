using OrganizationOfCompanies.API.Models;

namespace OrganizationOfCompanies.API.Repository.InterfacesRepository
{
    public interface IUserRepository
    {
        Task<IEnumerable<UserViewModel>> GetAllUser();
        Task<UserViewModel> GetUserbyId(int userId);
        Task<bool> AddUser(UserViewModel userView);
        Task<bool> UpdateUser(UserViewModel userView);
        Task<bool> DeletarUser(int userId);

        Task<bool> PostRegistration(int userId, int eventId);
        Task<int> UserQuantityEvent(int eventId);
        Task<int> VacanciesQuantityEvent(int eventId);

        Task<bool> PostregistrationClosure(int userId, int eventId);

        Task<int> GetIdUser(string email);
        Task<string> GetSenhaUser(int userId);
    }
}
