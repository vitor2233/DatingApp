using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        //Registrar usuário
         Task<User> Register(User user, string password);
        //Login usuário
         Task<User> Login(string username, string password);
         //Verificar se usuário existe
         Task<bool> UserExists(string username);
    }
}