using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace calender.Repostory
{
    public class CalenderDbContext:DbContext
    {
        public CalenderDbContext(DbContextOptions<CalenderDbContext> options) : base(options)
        {

        }


        public DbSet<User> User { get; set; }
    }
}
