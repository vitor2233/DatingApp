using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            /* Gerenciando os Dto's */
            CreateMap<User, UserForListDto>() /* ForMember adiante para aparecer a url no json */
                .ForMember(dest => dest.PhotoUrl, opt =>{
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                /* Idade do usuário */
                .ForMember(dest => dest.Age, opt => {
                   opt.ResolveUsing(d => d.DateOfBirth.CalculateAge()); 
                });
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>{
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                /* Idade do usuário */
                .ForMember(dest => dest.Age, opt => {
                   opt.ResolveUsing(d => d.DateOfBirth.CalculateAge()); 
                });
                
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}