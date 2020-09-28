using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserAPI.Interface;

namespace UserAPI.Service
{
    public class UserService : IUser
    {
        private List<User> users = new List<User>();
        public User CreateUser(User user)
        {
            users.Add(GenerateNewId(user));
            return user;
        }

        public User GetUser(int id)
        {
            return users.Find(user => user.Id == id);
        }

        public List<User> GetUsers()
        {
            return users;
        }

        public User UpdateUser(User user)
        {
            int indexUserToBeUpdated = users.FindIndex(user => user.Id == user.Id);

            if (indexUserToBeUpdated != -1)
                users[indexUserToBeUpdated] = user;

            return user;
        }

        private User GenerateNewId(User user)
        {
            if (users.Count == 0)
                user.Id = 1;
            else
                user.Id = users.Max(userMax => userMax.Id) + 1;

            return user;
        }
    }
}
