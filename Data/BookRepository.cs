using AugenBookStore.Data.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _context;
        private readonly ILogger<BookRepository> _logger;

        public BookRepository(AppDbContext context, ILogger<BookRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Book> GetAllBooks()
        {
            try
            {
                return _context.Books.OrderBy(book => book.Title).ToList();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get all books: {ex}");
                return null;
            }
        }

        public IEnumerable<Book> GetBooksByKey(string key)
        {
            try
            {
                return _context.Books.Where(book => book.Title.Contains(key)
                                                    || book.Author.Contains(key)).ToList();               
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get books by key: {ex}");
                return null;
            }
        }

        public Book GetBookID(string id)
        {
            try
            {
                return _context.Books.FirstOrDefault(book => book.ID == id);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get book by ID: {ex}");
                return null;
            }
        }

        public bool SaveAll()
        {
            try
            {
                return _context.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save changes: {ex}");
                return false;
            }
        }

        public void AddEntity(object model)
        {
            _context.Add(model);
        }
    }
}
