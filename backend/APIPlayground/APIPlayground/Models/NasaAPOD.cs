using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace APIPlayground.Models
{
    public class NasaAPOD
    {
        [Key]
        public string Date { get; set; }

        public string Title { get; set; }

        public string Media_Type { get; set; }

        public string Img_Url { get; set; }

        public string Vid_Url { get; set; }

        public string Copyright_Holder { get; set; }

        public string Explanation { get; set; }
    }
}
