using System;
using System.Collections.Generic;
using System.Text;

namespace AlkemyChallenge
{
    class MateriaViewModel
    {
        public int IdMateria { get; set; }
        public string nombre { get; set; }
        public string horario { get; set; }
        public ProfesorViewModel profesor { get; set; }
        public string cupoMax { get; set; }
        public string descripcion { get; set; }
        public string programa { get; set; }
    }
}
