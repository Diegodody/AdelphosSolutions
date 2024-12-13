using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrganizationOfCompanies.API.Application.Interfaces;
using OrganizationOfCompanies.API.DataContext;
using OrganizationOfCompanies.API.Models;

namespace OrganizationOfCompanies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService; 
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: Usuários        
        [HttpGet]
        public async Task<IActionResult> GetUsers() 
        {
            var x = await _userService.GetAllUser();
            return Ok(x); 
        }

        // GET: Obter usuários por id        
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<UserViewModel>>> GetUsersById(int id)
        {
            var x = await _userService.GetUserbyId(id);
            return Ok(x);
        }

        // POST: Criar usuário        
        [HttpPost]
        public async Task<IActionResult> PostUser(UserViewModel userView)
        {
            var x = await _userService.AddUser(userView);
            return Ok(x);
        }

        // UPDATE: Modificar usuário        
        [HttpPut]
        public async Task<IActionResult> UpdateUser(UserViewModel userView)
        {
            var x = await _userService.UpdateUser(userView);
            return Ok(x);
        }

        // DELETE: Excluir usuário por id        
        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<UserViewModel>>> DeleteUsersById(int id)
        {
            var x = await _userService.DeletarUser(id);
            return Ok(x);
        }

        // POST: Criar registro em um evento        
        [HttpPost("registration")]
        public async Task<IActionResult> PostRegistration(int userId, int eventId)
        {
            var x = await _userService.PostRegistration(userId, eventId);
            return Ok(x);
        }

        // POST: Criar registro em um evento        
        [HttpDelete("registrationClosure")]
        public async Task<IActionResult> PostregistrationClosure(int userId, int eventId)
        {
            var x = await _userService.PostregistrationClosure(userId, eventId);
            return Ok(x);
        }

        // POST: Criar registro em um evento        
        [HttpPost("{email}/login/{password}")]
        public async Task<IActionResult> PostLgin(string email, string password)
        {
            var x = await _userService.PostLgin(email, password);
            return Ok(x);
        }
    }
}
