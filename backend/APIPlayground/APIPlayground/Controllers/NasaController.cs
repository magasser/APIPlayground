using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using APIPlayground.Models;

namespace APIPlayground.Controllers
{
    [ApiController]
    [Route("nasa")]
    public class NasaController : ControllerBase
    { 
        private readonly ILogger<NasaController> _logger;
        private readonly DatabaseContext _db;

        public NasaController(ILogger<NasaController> logger, DatabaseContext context)
        {
            _logger = logger;
            _db = context;
        }

        [HttpGet]
        [Route("apods/{date}")]
        public IActionResult GetAPODByDate(string date)
        {
            NasaAPOD apod = _db.GetNasaAPODByDate(date);

            if (apod == null)
            {
                _logger.LogError($"Could not find APOD from date: {date}");
                return NotFound();
            }

            return Ok(apod);
        }

        [HttpPost]
        [Route("apod")]
        public IActionResult CreateAPOD(NasaAPOD apod)
        {
            try
            {
                _db.Nasa_APODs.Add(apod);
                _db.SaveChanges();
            } 
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }

            return Ok(apod);
        }
    }
}
