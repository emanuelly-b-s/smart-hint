using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace smart_hint.Model;

public partial class TesteSmartHintContext : DbContext
{
    public TesteSmartHintContext()
    {
    }

    public TesteSmartHintContext(DbContextOptions<TesteSmartHintContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Buyer> Buyers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=127.0.0.1;uid=root;pwd=32787513Ma!;database=teste_smart_hint", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Buyer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("buyers");

            entity.HasIndex(e => e.CpfCnpj, "cpf_cnpj").IsUnique();

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.Phone, "phone").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BirthDate).HasColumnName("birth_date");
            entity.Property(e => e.Blocked).HasColumnName("blocked");
            entity.Property(e => e.CpfCnpj)
                .HasMaxLength(20)
                .HasColumnName("cpf_cnpj");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Gender)
                .HasColumnType("enum('Female','Male','Other')")
                .HasColumnName("gender");
            entity.Property(e => e.LastUpdate)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp")
                .HasColumnName("last_update");
            entity.Property(e => e.NameCompanyName)
                .HasMaxLength(255)
                .HasColumnName("name_company_name");
            entity.Property(e => e.PersonType)
                .HasColumnType("enum('Individual','Legal Entity')")
                .HasColumnName("person_type");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");
            entity.Property(e => e.RegistrationDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("registration_date");
            entity.Property(e => e.StateRegistration)
                .HasMaxLength(20)
                .HasColumnName("state_registration");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
