using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using smart_hint.Model;
using smart_hint.Repositories;
using System.Linq.Expressions;

namespace smart_hint.Repositories.CustomerRepository;

public class CustomerRepository : ICustomerRepository
{

    private readonly TesteSmartHintContext ctx;
    private readonly ICustomerRepository _customerRepository;

     public CustomerRepository(TesteSmartHintContext ctx, ICustomerRepository customerRepository)
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