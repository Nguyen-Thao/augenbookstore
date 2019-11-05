using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data.Entities
{
    public class Book
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }       
        public string Author { get; set; }  
        public string PublishedDate { get; set; }
        public string SmallThumbnail { get; set; }
        public string Thumbnail { get; set; }
    }
}
