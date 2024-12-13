using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrganizationOfCompanies.API.Application.Interfaces;
using OrganizationOfCompanies.API.Application.InterfacesServices;
using OrganizationOfCompanies.API.Application.Services;
using OrganizationOfCompanies.API.Models;

namespace OrganizationOfCompanies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;
        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        // GET: Events        
        [HttpGet]
        public async Task<IActionResult> GetEvents()
        {
            var x = await _eventService.GetAllEvent();
            return Ok(x);
        }

        // GET: Obter Events por id        
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EventViewModel>>> GetEventsById(int id)
        {
            var x = await _eventService.GetEventbyId(id);
            return Ok(x);
        }

        // POST: Criar Event        
        [HttpPost]
        public async Task<IActionResult> PostEvent(EventViewModel EventView)
        {
            var x = await _eventService.AddEvent(EventView);
            return Ok(x);
        }

        // UPDATE: Modificar Event        
        [HttpPut]
        public async Task<IActionResult> UpdateEvent(EventViewModel EventView)
        {
            var x = await _eventService.UpdateEvent(EventView);
            return Ok(x);
        }

        // DELETE: Excluir Event por id        
        [HttpDelete("{id}")]
        public async Task<bool> DeletarEventById(int id)
        {
            var x = await _eventService.DeletarEvent(id);
            return x;
        }

        // GET: User Events        
        [HttpGet("{userId}/event")]
        public async Task<IActionResult> GetUserEvents(int userId)
        {
            var x = await _eventService.GetUserEvents(userId);
            return Ok(x);
        }
    }
}
