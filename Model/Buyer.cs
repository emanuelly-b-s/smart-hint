using System;
using System.Collections.Generic;

namespace smart_hint.Model;

public partial class Buyer
{
    public int Id { get; set; }

    public string NameCompanyName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Phone { get; set; }

    public DateTime RegistrationDate { get; set; }

    public bool Blocked { get; set; }

    public string PersonType { get; set; } = null!;

    public string? CpfCnpj { get; set; }

    public string? StateRegistration { get; set; }

    public string? Gender { get; set; }

    public DateOnly? BirthDate { get; set; }

    public DateTime LastUpdate { get; set; }
}
