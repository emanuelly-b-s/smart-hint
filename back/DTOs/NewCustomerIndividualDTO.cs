namespace DTOs;

public class NewCustomerIndividualDTO
{
    public required string Name { get; set; } 
    public required string Email { get; set; } 
    public required string Phone { get; set; }
    public DateTime RegisteredAt { get; set; } = DateTime.Today;
    public required string PersonType { get; set; }
    public required string CpfCnpj { get; set; }
    public string? StateRegistration { get; set; }
    public required string Gender { get; set; }
    public required DateOnly BirthDate { get; set; }  
    public required string PasswordCustomer { get; set; }
    public required bool Blocked { get; set; }  

}