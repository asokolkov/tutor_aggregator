namespace SPA.Repositories.Impl;

using Data;
using Models;

internal class TutorsRepository : ICrudRepository<Tutor>
{
    public Task<Page<Tutor>> Get()
    {
        throw new NotImplementedException();
    }

    public Task<Page<Tutor>> Get(long page, long size)
    {
        return Task.FromResult(new Page<Tutor>(
            new[]
            {
                new Tutor(
                    "Павел",
                    "Егоров",
                    "Екатеринбург",
                    null,
                    5,
                    new Uri(
                        "https://habrastorage.org/getpro/moikrug/uploads/user/376/100/334/avatar/medium_65a583581d73e0501d371d852ce48277.jpeg")
                ),
                new Tutor(
                    "Павел",
                    "Егоров",
                    "Екатеринбург",
                    null,
                    5,
                    new Uri(
                        "https://habrastorage.org/getpro/moikrug/uploads/user/376/100/334/avatar/medium_65a583581d73e0501d371d852ce48277.jpeg")
                ),
                new Tutor(
                    "Павел",
                    "Егоров",
                    "Екатеринбург",
                    null,
                    5,
                    new Uri(
                        "https://habrastorage.org/getpro/moikrug/uploads/user/376/100/334/avatar/medium_65a583581d73e0501d371d852ce48277.jpeg")
                )
            }, 3));
    }
}