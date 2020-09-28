using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UserAPI.Interface;

namespace UserAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUser _userService;

        public UserController(IUser userService)
        {
            _userService = userService;
        }

        [HttpGet("/api/users")]
        public ActionResult<List<User>> GetUsers()
        {
            return _userService.GetUsers();
        }

        [HttpPost("/api/users")]
        public ActionResult<User> CreateUser(User user)
        {
            return _userService.CreateUser(user);
        }

        [HttpPut("/api/users")]
        public ActionResult<User> UpdateUser(User user)
        {
            return _userService.UpdateUser(user);
        }

        [HttpGet("/api/users/{id}")]
        public ActionResult<User> GetUser(int id)
        {
            return _userService.GetUser(id);
        }
    }
}
