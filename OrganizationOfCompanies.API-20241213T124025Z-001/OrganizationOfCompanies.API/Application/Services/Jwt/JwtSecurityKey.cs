using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace OrganizationOfCompanies.API.Application.Services.Jwt
{
    public class JwtSecurityKey
    {
        public static SymmetricSecurityKey Create(string secret)
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret));
        }
    }
}
