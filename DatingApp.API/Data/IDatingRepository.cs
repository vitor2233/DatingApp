using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        /* Insert e delete */
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();

        /* Todos os usuários no banco */
        Task<IEnumerable<User>> GetUsers();

        /* Usuário individual no banco */
        Task<User> GetUser(int id);
    }
}