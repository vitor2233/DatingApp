using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    //Esta classe irá pegar o objeto em JSON e transformar em 2 strings, username e password
    public class UserForRegisterDto
    {
        //Obrigatório = required
        // [] Igual o type=phone, email, password do html
        [Required]
        public string Username { get; set; }

        [Required]
        //Colocar máximo e minimo de letras
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Senha deverá conter 4 a 8 caracteres")]
        public string Password { get; set; }
    }
}