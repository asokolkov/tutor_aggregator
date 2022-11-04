using Microsoft.EntityFrameworkCore;
using SPA.Data;
namespace SPA.Repositories.Impl;

using Models;

internal class TutorsRepository : ICrudRepository<Tutor>
{
    private readonly ApplicationContext applicationContext;
    
    public TutorsRepository(ApplicationContext applicationContext)
    {
        this.applicationContext = applicationContext;
    }
    
    public Task<Page<Tutor>> Get()
    {
        throw new NotImplementedException();
    }

    public async Task<Page<Tutor>> Get(long page, long size)
    {
        var tutors = await applicationContext.Tutors.ToListAsync();
        return new Page<Tutor>(tutors, tutors.Count);
    }
}