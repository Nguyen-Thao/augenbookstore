using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.ViewModels
{
    public class BookViewModel
    {
        public string BookID { get; set; }
        [Required]
        public string BookTitle { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string PublishedDate { get; set; }
        public string SmallThumbnail { get; set; }
        public string Thumbnail { get; set; }
    }
}
