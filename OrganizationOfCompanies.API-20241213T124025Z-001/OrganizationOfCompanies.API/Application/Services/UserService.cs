using OrganizationOfCompanies.API.Application.Interfaces;
using OrganizationOfCompanies.API.DataContext;
using OrganizationOfCompanies.API.Models;
using OrganizationOfCompanies.API.Repository.InterfacesRepository;

namespace OrganizationOfCompanies.API.Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> AddUser(UserViewModel userView)
        {
            UserViewModel user = new UserViewModel(
                userView.Id,
                userView.Email,
                userView.Name,
                userView.Password,
                userView.YearsOfAge,
                userView.Cpf,
                userView.City,
                userView.State,
                userView.Address,
                userView.Category,
                userView.MembershipDate);

            var result = await _userRepository.AddUser(userView);

            return result;
        }

        public async Task<bool> DeletarUser(int userId)
        {
            return await _userRepository.DeletarUser(userId);
        }

        public async Task<IEnumerable<UserViewModel>> GetAllUser() => await _userRepository.GetAllUser();

        public async Task<UserViewModel> GetUserbyId(int userId)
        {
            return await _userRepository.GetUserbyId(userId);
        }

        public async Task<bool> UpdateUser(UserViewModel userView)
        {
            UserViewModel user = new UserViewModel(
                userView.Id,
                userView.Email,
                userView.Name,
                userView.Password,
                userView.YearsOfAge,
                userView.Cpf,
                userView.City,
                userView.State,
                userView.Address,
                userView.Category,
                userView.MembershipDate);

            var result = await _userRepository.UpdateUser(userView);

            return result;
        }

        #region Criar registro de usuário em um evento
        public async Task<bool> PostRegistration(int userId, int eventId)
        {
            var userQuantityEvent = await _userRepository.UserQuantityEvent(eventId);

            var vacanciesQuantityEvent = await _userRepository.VacanciesQuantityEvent(eventId);

            if (vacanciesQuantityEvent > userQuantityEvent)
            {
                return await _userRepository.PostRegistration(userId, eventId);
            }

            return false;
        }
        #endregion

        #region Desfazendo registro de usuário em um evento
        public async Task<bool> PostregistrationClosure(int userId, int eventId)
        {
            return await _userRepository.PostregistrationClosure(userId, eventId);
        }
        #endregion

        #region Login
        public async Task<bool> PostLgin(string email, string password)
        {
            var existUser = await _userRepository.GetIdUser(email);

            if (existUser > 0)
            {
                var userPassword = await _userRepository.GetSenhaUser(existUser);

                if(password == userPassword)
                {
                    return true;
                }

                if(password != userPassword)
                {
                    return false;
                }
            }

            return false;
        }
        #endregion
    }
}
