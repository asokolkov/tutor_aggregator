using Microsoft.EntityFrameworkCore;
using SPA.Data;
namespace SPA.Repositories.Impl;

using Models;

internal class ContactsRepository : ICrudRepository<Contact>
{
    private readonly ApplicationContext context;
    
    public ContactsRepository(ApplicationContext context)
    {
        this.context = context;
    }
    
    public async Task<Page<Contact>> Get()
    {
        var contacts = await context.Contacts.ToListAsync();
        return new Page<Contact>(contacts, contacts.Count);
    }
    
    public async Task<Page<Contact>> Get(long page, long size)
    {
        const int pageSize = 100; // ?

        var contacts = await context.Contacts
            .Skip((int)page * pageSize)
            .Take((int)size)
            .ToListAsync();
        return new Page<Contact>(contacts, contacts.Count);
    }

    public async Task<Contact> Get(int id)
    {
        return await context.Contacts.FindAsync(id);
    }

    public async void Update(Contact contact)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            context.Contacts.Update(contact);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
        }
    }

    public async void Insert(Contact contact)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            await context.Contacts.AddAsync(contact);
            await context.SaveChangesAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
        }
    }
}