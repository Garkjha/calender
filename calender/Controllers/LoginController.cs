using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using calender.Repostory;
using Microsoft.AspNetCore.Http;

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
            //var result = _calenderDbContext.User.Find(1);
            return View();
        }
        [HttpGet("[action]")]
        public IActionResult Register(User model)
        {
            _calenderDbContext.User.Add(model);
            _calenderDbContext.SaveChanges();
            //var result = _calenderDbContext.User.Find(1);
            return Redirect("/Signin");
        }

        [HttpGet("[action]")]
        public IActionResult Signin(string EMail, string Password)
        {
            var user = _calenderDbContext.User.FirstOrDefault(w => w.EMail.Equals(EMail) && w.Password.Equals(Password));
            if(user != null)
            {
                HttpContext.Session.SetInt32("id", user.Userid);
                HttpContext.Session.SetString("fullname", user.Name + " " + user.SurName);
                return Redirect("/Home");
            }
            return Redirect("/About");
        }

        [HttpGet("[action]")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Redirect("/Signin");
        }
    }
}
//new User { EMail = "asdasdasd@asdasd.com", Name = "asdasd", Password = "yigittest", SurName = "yilmaz" }