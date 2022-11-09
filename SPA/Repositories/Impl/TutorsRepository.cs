using SPA.Data;
using SPA.Models;

namespace SPA.Repositories.Impl;

internal class TutorsRepository : PostgresRepository<Tutor>
{
    public TutorsRepository(ApplicationContext context) : base(context, context.Tutors)
    {
    }
}