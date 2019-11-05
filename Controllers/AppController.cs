using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AugenBookStore.Data;
using AugenBookStore.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AugenBookStore.Controllers
{
    public class AppController : Controller
    {
        private readonly IBookRepository _repository;

        public AppController(IBookRepository repository)
        {
            _repository = repository;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {           
            return View();
        }        
    }
}
