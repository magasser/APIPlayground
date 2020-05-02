using MySql.Data.EntityFrameworkCore.Extensions;
using Microsoft.EntityFrameworkCore;
using APIPlayground.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace APIPlayground.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<NasaAPOD> Nasa_APODs { get; set; }

        public NasaAPOD GetNasaAPODByDate(string date)
        {
            List<NasaAPOD> apods = Nasa_APODs.ToList();

            return apods.Find(apod => apod.Date == date);
        }
    }
}
