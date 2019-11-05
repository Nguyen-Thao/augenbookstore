using AugenBookStore.Data.Entities;
using AugenBookStore.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugenBookStore.Data
{
    public class AppMappingProfile: Profile
    {
        public AppMappingProfile()
        {
            CreateMap<Book, BookViewModel>()
                .ForMember(bvm => bvm.BookID, ex => ex.MapFrom(b => b.ID))
                .ForMember(bvm => bvm.BookTitle, ex => ex.MapFrom(b => b.Title))
                .ReverseMap();

            CreateMap<DeliveryService, DeliveryServiceViewModel>()
                .ForMember(bvm => bvm.DeliveryServiceID, ex => ex.MapFrom(b => b.ID))
                .ReverseMap();
        }
    }
}
