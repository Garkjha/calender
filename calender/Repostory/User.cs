using System.ComponentModel.DataAnnotations;

namespace calender.Repostory
{
    public class User
    {

        [Key]
        public int Userid { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string EMail { get; set; }
        public string Password { get; set; }

    }
}