using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using SPA.Data;
namespace SPA.Repositories.Impl;

using Models;

internal class TutorsRepository : ICrudRepository<Tutor>
{
    private readonly ApplicationContext context;
    
    public TutorsRepository(ApplicationContext context)
    {
        this.context = context;
    }
    
    public async Task<Page<Tutor>> Get()
    {
        var tutors = await context.Tutors.ToListAsync();
        return new Page<Tutor>(tutors, tutors.Count);
    }
    
    public async Task<Page<Tutor>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var tutors = await context.Tutors
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<Tutor>(tutors, tutors.Count);
    }

    public async Task<Tutor> Get(int id)
    {
        return await context.Tutors.FindAsync(id);
    }

    public async void Update(Tutor tutor)
    {
        context.Tutors.Update(tutor);
        await context.SaveChangesAsync();
    }

    public async void Insert(Tutor tutor)
    {
        await context.Tutors.AddAsync(tutor);
        await context.SaveChangesAsync();
    }
}