using AugenBookStore.Data;
using AugenBookStore.Data.Entities;
using AugenBookStore.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Controllers
{
    [Route("api/[Controller]")]
    public class DeliveryServiceController : Controller
    {
        private readonly ILogger<BooksController> _looger;
        private readonly IMapper _mapper;
        public DeliveryServiceController(
                            ILogger<BooksController> logger,
                            IMapper mapper)
        {
            _looger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetDeliveryServiceCost()
        {
            try
            {
                int month = DateTime.Now.Month;

                return Ok(_mapper.Map<IEnumerable<DeliveryService>, IEnumerable<DeliveryServiceViewModel>>(
                    new List<DeliveryService> {
                        new DeliveryService("Motobike", month, new MotobikeDeliveryCostCalculator()),
                        new DeliveryService("Train", month, new TrainDeliveryCostCalculator()),
                        new DeliveryService("Aircraft", month, new AircraftDeliveryCostCalculator()),
                    }
                    )); ;
            }
            catch (Exception ex)
            {
                _looger.LogError($"Failed to get delivery service cost: {ex}");
                return BadRequest("Fail to get products");
            }

        }
    }
}
