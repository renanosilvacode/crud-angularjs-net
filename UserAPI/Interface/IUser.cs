using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserAPI.Interface
{
    public interface IUser
    {
        public User CreateUser(User user);
        public User UpdateUser(User user);
        public User GetUser(int id);
        public List<User> GetUsers();
    }
}
