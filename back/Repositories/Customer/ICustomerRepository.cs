using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using smarthint.Model;
using smarthint.Repositories;

namespace smarthint.Repositories.CustomerRepository;
public interface ICustomerRepository : IRepository<Customer>
{
    Task<bool> ExistingEmail(string email);
    Task<bool> ExistingCpfCnpj(string cpfCnpj);
    Task<(List<Customer>, int)> GetCustomers(int pageNumber, int pageSize);
    
}

