using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

internal class EducationsRepository : PostgresRepository<Education>
{
    public EducationsRepository(ApplicationContext context) : base(context)
    {
    }
}