
namespace DTOs;
public class CustomerFilterModel
{
    public string? NameCompanyName { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public DateTime? RegisteredAt { get; set; }
    public bool? Blocked { get; set; }
    
}