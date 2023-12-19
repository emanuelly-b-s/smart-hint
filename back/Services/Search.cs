using System.Linq.Expressions;
using smarthint.Model;

namespace smarthint.Services;
public class CustomerSearchCriteria
{
    public required Expression<Func<Customer, bool>> Condition { get; set; }
}

public static class QueryableExtensions
{
    public static IQueryable<T> ApplyCriteria<T>(
        this IQueryable<T> query,
        Expression<Func<T, bool>> condition)
    {
        if (condition != null)
            query = query.Where(condition);

        return query;
    }
}

