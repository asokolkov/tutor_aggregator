using Microsoft.AspNetCore.JsonPatch;
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
    
    public async Task<Page<Tutor>> Get()
    {
        var tutors = await applicationContext.Tutors.ToListAsync();
        return new Page<Tutor>(tutors, tutors.Count);
    }
    
    public async Task<Page<Tutor>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var tutors = await applicationContext.Tutors
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<Tutor>(tutors, tutors.Count);
    }

    public async Task<Tutor> Get(int id)
    {
        return await applicationContext.Tutors.FindAsync(id);
    }

    public async void Update(int id, JsonPatchDocument document)
    {
        var tutor = await applicationContext.Tutors.FindAsync(id);
        if (tutor == null) return;
        document.ApplyTo(tutor);
        await applicationContext.SaveChangesAsync();
    }

    public async void Insert(Tutor tutor)
    {
        await applicationContext.Tutors.AddAsync(tutor);
        await applicationContext.SaveChangesAsync();
    }
}