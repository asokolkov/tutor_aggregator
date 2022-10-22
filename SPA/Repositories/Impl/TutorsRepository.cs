namespace SPA.Repositories.Impl;

using Data;
using Models;

internal class TutorsRepository : ICrudRepository<Tutor>
{
    private readonly ApplicationContext applicationContext;

    public TutorsRepository(ApplicationContext applicationContext)
    {
        this.applicationContext = applicationContext;
    }
}