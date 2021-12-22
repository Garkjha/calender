using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using calender.Repostory;

namespace calender.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly CalenderDbContext _calenderDbContext;
        public LoginController(CalenderDbContext calenderDbContext)
        {
            _calenderDbContext = calenderDbContext;
        }

        [HttpGet("[action]")]
        public IActionResult Index()
        {
            _calenderDbContext.User.Add(new User { EMail = "test@test.com", Name = "yigit", Password = "yigittest", SurName = "yilmaz" });
            _calenderDbContext.SaveChanges();
            //var result = _calenderDbContext.User.Find(1);
            return View();
        }  
    }
}
