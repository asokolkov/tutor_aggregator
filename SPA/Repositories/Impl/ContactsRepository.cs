using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

internal class ContactsRepository : PostgresRepository<Contact>
{
    public ContactsRepository(ApplicationContext context) : base(context, context.Contacts)
    {
    }
}