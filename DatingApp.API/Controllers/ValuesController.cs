using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    // GET http://localhost:5000/api/values/5
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            //Var private recebe var da classe
            _context = context;
            
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {//Vai no banco, pega e armazena tudo em values
            var values = await _context.Values.ToListAsync();

            return Ok(values);
        }

        // GET api/values/5
        //Pegando algum dado especifico 
        [AllowAnonymous]
        //AllowAnonymous = qualquer um pode ir nessa url
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            //Valor recebe o id digitado na url
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
