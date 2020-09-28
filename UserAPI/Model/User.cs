using System;
using System.ComponentModel.DataAnnotations;

namespace UserAPI
{
    public class User
    {
        
        public int Id { get; set; }

        [Required]
        [StringLength(50,ErrorMessage = "Name cannot be more than 50")]
        public string Name { get; set; }
        [Required]
        [Range(0,115, ErrorMessage ="Age out of the range allowed")]
        public int Age { get; set; }
        [Required]
        [StringLength(50, ErrorMessage = "Address cannot be more than 50")]
        public string Address { get; set; }
    }
}
