using Frontend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Frontend.Controllers;

[ApiController]

public class UsuarioController : ControllerBase
{
    private readonly FarmFoodNutricionContext _context;

    public UsuarioController(FarmFoodNutricionContext context)
    {
        _context=context;
    }

    [HttpPost]
    [Route("api/usuario/login")]
    
    public async Task<IActionResult> Login([FromBody] Login model)
    {
        var user = await _context.Usuarios.SingleOrDefaultAsync(u => u.Usuario1 == model.Username && u.Password == model.Password);

        if (user == null)
        {
            return Unauthorized();
        }

        // Generate a JWT token and return it to the client
        var token = GenerateJwtToken(user);
        return Ok(new { token });
    }

    private string GenerateJwtToken(Usuario user)
    {
        // Generate a JWT token using a JWT library (e.g. System.IdentityModel.Tokens.Jwt)
        // ...

        return "myjwttoken";
    }
}





