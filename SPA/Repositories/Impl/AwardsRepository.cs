using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

internal class AwardsRepository : PostgresRepository<Award>
{
    public AwardsRepository(ApplicationContext context) : base(context)
    {
    }
}