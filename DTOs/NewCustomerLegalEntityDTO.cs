namespace DTOs;

public class NewCustomerLegalEntityDTO
{
    public required string Name { get; set; }
    public required string Email { get; set; }
    public required string Phone { get; set; }
    public DateTime RegisteredAt { get; set; } = DateTime.Now;
    public required string PersonType { get; set; }
    public required string CpfCnpj { get; set; }
    public required string? StateRegistration { get; set; }
}