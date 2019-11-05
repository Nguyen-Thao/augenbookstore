using AugenBookStore.Data;
using AugenBookStore.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore
{
    public class DataSeeder
    {
        private readonly AppDbContext _context;

        public DataSeeder(AppDbContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();
            if (!_context.Books.Any())
            {
                var _books = new List<Book>
                {
                    new Book
                    {
                        ID = "zYw3sYFtz9kC",
                        Title = "The Contemporary Thesaurus of Search Terms and Synonyms",
                        Description = "Whether your search is limited to a single database or is as expansive as all of cyberspace, you won't find the intended results unless you use the words that work. Now in its second edition, Sara Knapp has updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It's ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business.The second edition has added more than 9, 000 entries to the first edition's extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music.",
                        Author = "Sara D. Knapp",
                        PublishedDate = "2008-10-11",
                        SmallThumbnail = "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        Thumbnail = "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    new Book
                    {
                        ID = "mFT_CgAAQBAJ",
                        Title = "Search Terms: Alpha",
                        Description = "College sophomore Tyler Gallagher loves computers, video games, and Thanksgiving Break. He's timed the arrival of his computer components with the holiday vacation from school to blast aliens and enemy soldiers alike on his brand new, high-end gaming computer. When the parts arrive, it soon becomes apparent that they aren't what he ordered from TechTerritory. Thinking he's the butt of a practical joke, Tyler plays along, and builds the computer with the obviously fake components. His annoyance turns to shock when the computer powers on. His shock turns to a mix of disbelief and wonder when he learns the strange \"quantum\" computer can pull web pages from the near future. Disbelief and wonder soon become fear and uncertainty when he discovers the future might not be so bright. \"Search Terms: Alpha\" is the first half of a new time travel thriller. 52,000 word novel Adult themes / language / mild sexual content",
                        Author = "Travis Hill",
                        PublishedDate = "2008-10-11",
                        SmallThumbnail = "http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        Thumbnail = "http://books.google.com/books/content?id=mFT_CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    new Book
                    {
                        ID = "LD9tCQAAQBAJ",
                        Title = "Advances in Information Retrieval",
                        Description = "The annual colloquium on information retrieval research provides an opportunity for both new and established researchers to present papers describing work in progress or ?nal results. This colloquium was established by the BCS IRSG(B- tish Computer Society Information Retrieval Specialist Group), and named the Annual Colloquium on Information Retrieval Research. Recently, the location of the colloquium has alternated between the United Kingdom and continental Europe. To re?ect the growing European orientation of the event, the colloquium was renamed “European Annual Colloquium on Information Retrieval Research” from 2001. Since the inception of the colloquium in 1979 the event has been hosted in the city of Glasgow on four separate occasions. However, this was the ?rst time that the organization of the colloquium had been jointly undertaken by three separate computer and information science departments; an indication of the collaborative nature and diversity of IR research within the universities of the West of Scotland. The organizers of ECIR 2002 saw a sharp increase in the number of go- quality submissions in answer to the call for papers over previous years and as such 52 submitted papers were each allocated 3 members of the program committee for double blind review of the manuscripts. A total of 23 papers were eventually selected for oral presentation at the colloquium in Glasgow which gave an acceptance rate of less than 45% and ensured a very high standard of the papers presented.",
                        Author = "Fabio Crestani",
                        PublishedDate = "2008-10-11",
                        SmallThumbnail = "http://books.google.com/books/content?id=LD9tCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        Thumbnail = "http://books.google.com/books/content?id=LD9tCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    new Book
                    {
                        ID = "fvSbCgAAQBAJ",
                        Title = "How Software Works",
                        Description = "We use software every day to perform all kinds of magical, powerful tasks. It's the force behind stunning CGI graphics, safe online shopping, and speedy Google searches. Software drives the modern world, but its inner workings remain a mystery to many. How Software Works explains how computers perform common-yet-amazing tasks that we take for granted every day. Inside you'll learn: -How data is encrypted - How passwords are used and protected -How computer graphics are created -How video is compressed for streaming and storage -How data is searched(and found) in huge databases -How programs can work together on the same problem without conflict -How data travels over the Internet How Software Works breaks down these processes with patient explanations and intuitive diagrams so that anyone can understand—no technical background is required, and you won't be reading through any code. In plain English, you'll examine the intricate logic behind the technologies you constantly use but never understood.If you've ever wondered what really goes on behind your computer screen, How Software Works will give you fascinating look into the software all around you.",
                        Author = "V. Anton Spraul",
                        PublishedDate = "2005-10-11",
                        SmallThumbnail = "http://books.google.com/books/content?id=fvSbCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        Thumbnail = "http://books.google.com/books/content?id=fvSbCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    new Book
                    {
                        ID = "jQ_SBQAAQBAJ",
                        Title = "Computation for Humanity",
                        Description = "The exponential progress and accessibility of computing has vastly increased data flows and revolutionized the practice of science, engineering, and communication. Computing plays a critical role in advancing research across almost every scientific discipline. Computation for Humanity: Information Technology to Advance Society is a guide for the creation of services, products, and tools that facilitate, support, and enhance progress of humanity toward more sustainable life. This book: Provides a deep understanding of the practical applications of computation to solve human-machine problems Delivers insight into theoretical approaches in an accessible manner Provides a comprehensive overview of computational science and engineering applications in selected disciplines Crosses the boundaries between different domains and shows how they interrelate and complement one another Focuses on grand challenges and issues that matter for the future of humanity Shows different perspectives of computational thinking, understanding, and reasoning Provides a basis for scientific discoveries and enables adopting scientific theories and engineering practices from other disciplines Takes a step back to provide a human-related abstraction level that is not ultimately seen in pure technological elaborations/collections The editors provide a collection of numerous computation-related projects that form a foundation from which to cross-pollinate between different disciplines and further extensive collaboration. They present a clear and profound understanding of computing in today's world, and provide fundamental solutions to some of the most pertinent humanity-related problems.",
                        Author = "Justyna Zander",
                        PublishedDate = "2008-10-11",
                        SmallThumbnail = "http://books.google.com/books/content?id=jQ_SBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        Thumbnail = "http://books.google.com/books/content?id=jQ_SBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }
                };

                _context.Books.AddRange(_books);
                _context.SaveChanges();
            }
        }
    }
}
