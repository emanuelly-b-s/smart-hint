using Microsoft.AspNetCore.Mvc;
using Security.Jwt;

namespace smarthint.Controllers;

using DTOs;
using smarthint.Model;
using Microsoft.AspNetCore.Cors;
using smarthint.Repositories.CustomerRepository;
using System.Linq.Expressions;
using SecurityService;

[ApiController]
[Route("customer")]
public class CustomerController : ControllerBase
{

    [HttpGet]
    [EnableCors("MainPolicy")]
    public async Task<IActionResult> FilterAndPaginate([FromServices] ICustomerRepository customerRepository,
                                                   [FromQuery] CustomerFilterModel filterModel,
                                                   [FromQuery] int page = 1,
                                                   [FromQuery] int pageSize = 20)
    {
        var searchConditions = new List<Expression<Func<Customer, bool>>>();

        if (!string.IsNullOrEmpty(filterModel.NameCompanyName))
            searchConditions.Add(c => c.NameCompanyName.Contains(filterModel.NameCompanyName));

        if (!string.IsNullOrEmpty(filterModel.Email))
            searchConditions.Add(c => c.Email.Contains(filterModel.Email));

        var (customers, totalRecords) = await customerRepository.FilterAndPaginateCustomers(searchConditions, page, pageSize);

        var response = new
        {
            Data = customers,
            Total = totalRecords,
            Page = page,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling((double)totalRecords / pageSize)
        };

        return Ok(response);
    }

    [HttpPost]
    [EnableCors("MainPolicy")]
    public async Task<ActionResult> RegisterLegalEntity(
        [FromServices] ICustomerRepository _customerRep,
        [FromBody] NewCustomerLegalEntityDTO customerData,
        [FromServices] ISecurityServiceJwt passJwt
    )
    {
        if (await _customerRep.ExistingEmail(customerData.Email) || await _customerRep.ExistingCpfCnpj(customerData.CpfCnpj))
            return BadRequest("");

        var passUserSalt = passJwt.ApplySalt();
        var passUserHash = passJwt.ApplyHash(customerData.PasswordCustomer, passUserSalt);
        var passUserHash64 = Convert.ToBase64String(passUserHash);


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
            PasswordCustomer = passUserHash64,
            SaltPassword = passUserSalt
        };

        await _customerRep.Add(c);

        return Ok();
    }
}
