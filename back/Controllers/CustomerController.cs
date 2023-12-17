using Microsoft.AspNetCore.Mvc;

namespace smarthint.Controllers;

using DTOs;
using smarthint.Model;
using Microsoft.AspNetCore.Cors;
using smarthint.Repositories.CustomerRepository;

[ApiController]
[Route("customer")]
public class CustomerController : ControllerBase
{
    [HttpGet]
    [EnableCors("MainPolicy")]
    public async Task<ActionResult<List<Customer>>> GetAll(
        [FromServices] ICustomerRepository _customerRep)
    {
        return await _customerRep.Filter(c => true);
    }

    [HttpPost]
    [EnableCors("MainPolicy")]
    public async Task<ActionResult> RegisterLegalEntity(
        [FromServices] ICustomerRepository _customerRep,
        [FromBody] NewCustomerLegalEntityDTO customerData
    )
    {
        if (await _customerRep.ExistingEmail(customerData.Email) || await _customerRep.ExistingCpfCnpj(customerData.CpfCnpj))
            return BadRequest("Email already registered");

        Customer c = new()
        {
            NameCompanyName = customerData.CompanyName,
            Email = customerData.Email,
            Phone = customerData.Phone,
            RegisteredAt = customerData.RegisteredAt,
            PersonType = customerData.PersonType,
            CpfCnpj = customerData.CpfCnpj,
            StateRegistration = customerData.StateRegistration,
            LastUpdate = DateTime.Now,
        };

        await _customerRep.Add(c);

        return Ok();
    }
}
