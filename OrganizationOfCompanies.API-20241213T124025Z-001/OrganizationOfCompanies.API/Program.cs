
using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.EntityFrameworkCore;
using OrganizationOfCompanies.API.Application.Interfaces;
using OrganizationOfCompanies.API.Application.InterfacesServices;
using OrganizationOfCompanies.API.Application.Services;
using OrganizationOfCompanies.API.DataContext;
using OrganizationOfCompanies.API.Models;
using OrganizationOfCompanies.API.Repository.InterfacesRepository;
using OrganizationOfCompanies.API.Repository.RepositoryService;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Interfaces e Repositórios
builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IEventRepository, EventRepository>();

// Serviço e Domínio
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IEventService, EventService>();

//builder.Services.AddTransient<TokenService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//Outra forma de declarar a connectionString  -> provavelmente não vou utilizar
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("Host=localhost;User Id=postgres;Password=0203;Port=5433;Database=dbSistemaDDDNoticia;"));
});

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .WithOrigins("http://localhost:3000");
});

//app.MapGet(pattern:"/Token", handler:(TokenService service) => service.GenerateToken(new UserViewModel(Email:'testeEmail@hotmail.com', Name: 'testeName', Category: 3));

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
