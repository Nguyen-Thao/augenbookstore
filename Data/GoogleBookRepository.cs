using AugenBookStore.Data.Entities;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class GoogleBookRepository : IBookRepository
    {
        private readonly AppDbContext _context;
        private readonly ILogger<BookRepository> _logger;
        string googleApiBase = "https://www.googleapis.com/books/v1/volumes";
        string apiKey = "AIzaSyBK0gLET_ErbXqUH0YBuC9RQdBoUJiHdec";

        public GoogleBookRepository(AppDbContext context, ILogger<BookRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Book> GetBooksByKey(string key)
        {
            try
            {                
                string url = string.Format("{0}?q=intitle:{1}|inauthor:{2}&key={3}", googleApiBase, key, key, apiKey);
                var jsonData = GetBooksFromGoogle(url);

                var result = new List<Book>();
                foreach (var item in jsonData.items)
                {
                    var book = ConvertToEntity(item);
                    result.Add(book);
                }

                return result;
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get all books: {ex}");
                return null;
            }
        }
       
        public Book GetBookID(string id)
        {
            try
            {
                string url = string.Format("{0}/{1}&key={2}", googleApiBase, id, apiKey);
                var jsonData = GetBooksFromGoogle(url);

                var book = ConvertToEntity(jsonData);
                return book;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get book by ID: {ex}");
                return null;
            }
        }

        private dynamic GetBooksFromGoogle(string url)
        {
            try
            {
                var request = WebRequest.Create(url);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string responeString = reader.ReadToEnd();
                dynamic jsonData = JsonConvert.DeserializeObject(responeString);
                return jsonData;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get books from Google: {ex}");
                return null;
            }
        }
        private Book ConvertToEntity(dynamic item)
        {
            var book = new Book();
            book.ID = item.id;
            if (item.volumeInfo != null)
            {
                if (item.volumeInfo.authors != null)
                {
                    foreach (var author in item.volumeInfo.authors)
                    {
                        if (!string.IsNullOrEmpty(book.Author))
                        {
                            book.Author += "; ";
                        }
                        book.Author += author;
                    }
                }

                book.Title = item.volumeInfo.title;
                book.Description = item.volumeInfo.description;
                book.PublishedDate = item.volumeInfo.publishedDate;
                if (item.volumeInfo.imageLinks != null)
                {
                    book.SmallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
                    book.Thumbnail = item.volumeInfo.imageLinks.thumbnail;
                }

            }

            return book;
        }

        public IEnumerable<Book> GetAllBooks()
        {
            throw new NotImplementedException();
        }

        public bool SaveAll()
        {
            throw new NotImplementedException();
        }

        public void AddEntity(object model)
        {
            throw new NotImplementedException();
        }
    }
}
