using System.Linq.Expressions;

namespace smart_hint.Repositories;
public interface IRepository<T>
{
    Task Add(T obj);
    Task<List<T>> Filter(Expression<Func<T, bool>> condition);
    Task Delete(T obj); 
    Task Update (T obj); 

}