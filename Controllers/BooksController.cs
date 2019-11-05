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
    public class BooksController:Controller
    {
        private readonly IBookRepository _repository;
        private readonly ILogger<BooksController> _looger;
        private readonly IMapper _mapper;
        public BooksController(IBookRepository repository, 
                            ILogger<BooksController> logger,
                            IMapper mapper)
        {
            _repository = repository;
            _looger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(_repository.GetAllBooks()));
            }
            catch (Exception ex)
            {
                _looger.LogError($"Failed to get products: {ex}");
                return BadRequest("Fail to get products");
            }

        }

        [Route("[Action]")]
        [HttpGet]        
        public IActionResult Search(string key)
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(_repository.GetBooksByKey(key)));
            }
            catch (Exception ex)
            {
                _looger.LogError($"Failed to get products: {ex}");
                return BadRequest("Fail to get products");
            }

        }

        [HttpGet("{id}")]
        public IActionResult GetByID(string id)
        {
            try
            {
                var book = _repository.GetBookID(id);
                if (book != null)
                    return Ok(_mapper.Map<Book, BookViewModel>(book));
                else
                    return BadRequest();

            }
            catch (Exception ex)
            {
                _looger.LogError($"Failed to get products: {ex}");
                return BadRequest("Fail to get products");
            }

        }
        [HttpPost]
        public IActionResult Post([FromBody] BookViewModel book)
        {
            try
            {
                var newBook = _mapper.Map<BookViewModel, Book>(book);
                _repository.AddEntity(newBook);
                if (_repository.SaveAll())
                    return Created($"/api/books/{newBook.ID}", _mapper.Map<Book, BookViewModel>(newBook));
            }
            catch (Exception ex)
            {
                _looger.LogError($"Failed to get products: {ex}");                
            }
            return BadRequest("Fail to save a new book");
        }
    }
}
