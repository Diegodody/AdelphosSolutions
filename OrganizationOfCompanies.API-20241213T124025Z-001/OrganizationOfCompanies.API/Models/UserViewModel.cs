using DocumentFormat.OpenXml.InkML;

namespace OrganizationOfCompanies.API.Models
{
    public class UserViewModel
    {
        public UserViewModel()
        {
        }

        public UserViewModel(int id, string email, string name, string password, int yearsOfAge, string cpf, string city, string state, string address, int category, DateTime membershipDate)
        {
            Id = id;
            Email = email;
            Name = name;
            Password = password;
            YearsOfAge = yearsOfAge;
            Cpf = cpf;
            City = city;
            State = state;
            Address = address;
            Category = category;
            MembershipDate = membershipDate;
        }

        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int YearsOfAge { get; set; }
        public string Cpf { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Address { get; set; }
        public int Category { get; set; }
        public DateTime MembershipDate { get; set; }
    }
}
