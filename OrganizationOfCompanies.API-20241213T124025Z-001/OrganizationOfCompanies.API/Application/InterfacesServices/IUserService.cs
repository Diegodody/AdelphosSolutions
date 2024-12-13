using DocumentFormat.OpenXml.Spreadsheet;
using OrganizationOfCompanies.API.Models;

namespace OrganizationOfCompanies.API.Application.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserViewModel>> GetAllUser();
        Task<UserViewModel> GetUserbyId(int userId);
        Task<bool> AddUser(UserViewModel userView);
        Task<bool> UpdateUser(UserViewModel userView);
        Task<bool> DeletarUser(int userId);

        Task<bool> PostRegistration(int userId, int eventId);
        Task<bool> PostregistrationClosure(int userId, int eventId);

        Task<bool> PostLgin(string email, string password);
    }
}
