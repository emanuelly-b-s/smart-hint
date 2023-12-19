using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;
using smarthint;

namespace smarthint.Model;

public partial class SmarthintContext : DbContext
{
    public SmarthintContext()
    {
    }

    public SmarthintContext(DbContextOptions<SmarthintContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Setting> Settings { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=127.0.0.1;uid=root;pwd=32787513Ma!;database=smarthint", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("customer");

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
            entity.Property(e => e.PasswordCustomer)
                .HasColumnType("text")
                .HasColumnName("passwordCustomer");
            entity.Property(e => e.PersonType)
                .HasColumnType("enum('Individual','Legal Entity')")
                .HasColumnName("person_type");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");
            entity.Property(e => e.RegisteredAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("registered_at");
            entity.Property(e => e.SaltPassword)
                .HasColumnType("text")
                .HasColumnName("saltPassword");
            entity.Property(e => e.StateRegistration)
                .HasMaxLength(20)
                .HasColumnName("state_registration");
        });

        modelBuilder.Entity<Setting>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("settings");

            entity.HasIndex(e => e.SettingKey, "setting_key").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.SettingKey).HasColumnName("setting_key");
            entity.Property(e => e.SettingValue)
                .HasMaxLength(255)
                .HasColumnName("setting_value");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
