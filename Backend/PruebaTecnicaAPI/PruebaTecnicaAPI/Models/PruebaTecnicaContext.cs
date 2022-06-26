using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PruebaTecnicaAPI.Models
{
    public partial class PruebaTecnicaContext : DbContext
    {
        public PruebaTecnicaContext()
        {
        }

        public PruebaTecnicaContext(DbContextOptions<PruebaTecnicaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ToDoListTable> ToDoListTables { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDoListTable>(entity =>
            {
                entity.ToTable("ToDoListTable");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Assignment)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.Property(e => e.Date)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Status)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
