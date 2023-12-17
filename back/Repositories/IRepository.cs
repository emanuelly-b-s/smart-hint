using System.Linq.Expressions;

namespace smarthint.Repositories;
public interface IRepository<T>
{
    Task Add(T obj);
    Task<List<T>> Filter(Expression<Func<T, bool>> condition);
    Task Delete(T obj); 
    Task Update (T obj); 

}