using Microsoft.EntityFrameworkCore;
using Npgsql;
using OrganizationOfCompanies.API.Models;
using System.Data.Common;
using System.Data;

namespace OrganizationOfCompanies.API.DataContext
{
    /*É a representação do banco em memória*/
    public class AppDbContext : DbContext
    {
        private IDbConnection DbConnection { get; set; }
        private IDbTransaction DbTransaction { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        /*A representação das tabelas no contexto*/
        public DbSet<UserViewModel> Users { get; set; }
        public DbSet<EventViewModel> Events { get; set; }

        /*Setando a connectionString*/
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot config = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                string connString = config.GetConnectionString("Host=localhost;User Id=postgres;Password=0203;Port=5433;Database=dbSistemaDDDNoticia;");
                optionsBuilder.UseNpgsql(connString); 
            }

            /*A declaração da connectionString que será utilizada para acessar o banco*/
            optionsBuilder.UseNpgsql(connectionString: "Host=localhost;User Id=postgres;Password=0203;Port=5433;Database=dbSistemaDDDNoticia;"); // Banco de teste
            
            base.OnConfiguring(optionsBuilder);
        }

        public IDbConnection OpenConnection() 
        {
            return new NpgsqlConnection(connectionString: "Host=localhost;User Id=postgres;Password=0203;Port=5433;Database=dbSistemaDDDNoticia;");
            //DbConnection.Open();
            //return DbConnection;
        }

        public void Dispose()
        {
            if (DbConnection != null && DbConnection.State == ConnectionState.Open)
            {
                DbConnection.Close();
                DbConnection = null;
            }
            GC.SuppressFinalize(this);
        }

        public void BeginTransaction()
        {
            DbTransaction = DbConnection.BeginTransaction();
        }


        public void CommitTransaction() 
        { 
            if (DbTransaction != null) 
            { 
                DbTransaction.Commit(); 
                DbTransaction.Dispose(); 
                DbTransaction = null; 
            } 
        }
        public void Commit()
        {
            DbTransaction.Commit();
            Dispose();
        }

        public void Rollback()
        {
            DbTransaction.Rollback();
            Dispose();
        }
    }
}
