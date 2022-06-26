using System;
using System.Collections.Generic;

namespace PruebaTecnicaAPI.Models
{
    public partial class ToDoListTable
    {
        public int Id { get; set; }
        public string Assignment { get; set; } = null!;
        public string Status { get; set; } = null!;
        public string Date { get; set; } = null!;
    }
}
