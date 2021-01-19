using System;
using System.Collections.Generic;
using System.Text;

namespace Bithit.Model
{
    public class Album
    {
        public long AlbumId { get; set; }
        public string Name { get; set; }
        public List<Photos> Photos { get; set; }
        public List<Video> Videos { get; set; }
    }
}
