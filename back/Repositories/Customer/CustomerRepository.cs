using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using smarthint.Model;
using smarthint.Repositories;
using System.Linq.Expressions;
using smarthint.Services;

namespace smarthint.Repositories.CustomerRepository;

public class CustomerRepository : ICustomerRepository
{

    private readonly SmarthintContext ctx;
    private readonly ICustomerRepository _customerRepository;

    public CustomerRepository(SmarthintContext ctx)
        => this.ctx = ctx;

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

    public async Task<bool> ExistingStateRegistration(string stateRegistration)
        => await ctx.Customers
            .AnyAsync(c => c.StateRegistration == stateRegistration);

    public async Task<List<Customer>> Filter(Expression<Func<Customer, bool>> condition)
    {
        var query = ctx.Customers.Where(condition);

        return await query.ToListAsync();
    }

    public async Task<(List<Customer>, int)> FilterAndPaginateCustomers(List<Expression<Func<Customer, bool>>> searchConditions,
                                                                        int pageNumber,
                                                                        int pageSize)
    {
        IQueryable<Customer> query = ctx.Customers;

        foreach (var condition in searchConditions)
            query = query.ApplyCriteria(condition);


        var totalRecords = await query.CountAsync();

        var paginatedCustomers = await query
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return (paginatedCustomers, totalRecords);
    }

    public async Task<(List<Customer>, int)> GetCustomers(int pageNumber, int pageSize)
    {
        var totalRecords = await ctx.Customers.CountAsync();

        var customers = await ctx.Customers
                                 .Skip((pageNumber - 1) * pageSize)
                                 .Take(pageSize)
                                 .ToListAsync();

        return (customers, totalRecords);
    }

    public async Task Update(Customer obj)
    {
        ctx.Customers.Update(obj);
        await ctx.SaveChangesAsync();
    }


}