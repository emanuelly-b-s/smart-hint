using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using smarthint.Model;
using smarthint.Repositories;
using System.Linq.Expressions;

namespace smarthint.Repositories.CustomerRepository;

public class CustomerRepository : ICustomerRepository
{

    private readonly SmarthintContext ctx;
    private readonly ICustomerRepository _customerRepository;

    public CustomerRepository(SmarthintContext ctx, ICustomerRepository customerRepository)
    {
        this.ctx = ctx;
        this._customerRepository = customerRepository;
    }

    public async Task Add(Customer obj)
    {
        await ctx.Customers.AddAsync(obj);
        await ctx.SaveChangesAsync();
    }

    public Task Delete(Customer obj)
    {
        throw new NotImplementedException();
    }

    public async Task<bool> ExistingCpfCnpj(string cpfCnpj)
        => await ctx.Customers
            .AnyAsync(c => c.CpfCnpj == cpfCnpj);

    public async Task<bool> ExistingEmail(string email) 
        => await ctx.Customers
            .AnyAsync(c => c.Email == email);

    public Task<List<Customer>> Filter(Expression<Func<Customer, bool>> condition)
    {
        throw new NotImplementedException();
    }

    public async Task Update(Customer obj)
    {
        ctx.Customers.Update(obj);
        await ctx.SaveChangesAsync();
    }
}