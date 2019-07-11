using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            //Chamar algum erro na página
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Acess-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Acess-Control-Allow-Origin", "*");
        }

        /* Calcular Idade */
        public static int CalculateAge(this DateTime theDateTime)
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            /* if = Então não fez aniversário ainda */
            if (theDateTime.AddYears(age) > DateTime.Today) age--;

            return age;
        }
    }
}