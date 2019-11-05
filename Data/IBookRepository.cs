using System.Collections.Generic;
using AugenBookStore.Data.Entities;

namespace AugenBookStore.Data
{
    public interface IBookRepository
    {
        IEnumerable<Book> GetAllBooks();
        Book GetBookID(string id);
        IEnumerable<Book> GetBooksByKey(string key);
        bool SaveAll();
        void AddEntity(object model);
    }
}