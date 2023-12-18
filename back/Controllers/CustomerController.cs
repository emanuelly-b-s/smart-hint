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
        [FromServices] ICustomerRepository _customerRep,
        int page = 1, int pageSize = 20)
    {

        if (page <= 0 || pageSize <= 0)
            return BadRequest("Invalid page or pageSize parameters");

        var (customers, totalRecords) = await _customerRep.GetCustomers(page, pageSize);

        return Ok(new { data = customers, total = totalRecords, page, pageSize });
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
