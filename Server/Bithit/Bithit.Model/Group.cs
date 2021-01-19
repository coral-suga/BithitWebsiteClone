using System;
using System.Collections.Generic;
using System.Text;

namespace Bithit.Model
{
    public class Group
    {
        public string GroupId { get; set; }
        public string Name { get; set; }
        public Profile Profile { get; set; }
        public List<Artists> Member { get; set; }
    }
}
