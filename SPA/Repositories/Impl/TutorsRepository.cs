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
        var tutors = new[]
        {
            new Tutor(
                "Анна",
                "Ефимова",
                "Москва",
                null,
                4,
                null,
                "5 лицей",
                "Повар"
            ),
            new Tutor(
                "Абэвэ",
                "Алфавитова",
                "Анапа",
                null,
                4.3,
                new Uri(
                    "https://habrastorage.org/webt/gc/fu/vs/gcfuvsvhoyvbjsr8zui0wl2dvlu.jpeg"),
                "Детский мир",
                "Охранник"
            ),
            new Tutor(
                "Павел",
                "Егоров",
                "Екатеринбург",
                null,
                5,
                new Uri(
                    "https://habrastorage.org/getpro/moikrug/uploads/user/376/100/334/avatar/medium_65a583581d73e0501d371d852ce48277.jpeg"),
                "Исетская рыбная лавка",
                "Рыбак"
            ),
            new Tutor(
                "Борис",
                "Свилов",
                "Екатеринбург",
                null,
                2,
                new Uri(
                    "https://habrastorage.org/webt/u-/hv/nm/u-hvnmcaxiwvqhq99e1fvtnwzso.jpeg"),
                "Северный гольф клуб",
                "Тренер по гольфу"
            ),
            new Tutor(
                "Мэн",
                "Чинг Чонг",
                "Иркутск",
                null,
                5,
                new Uri(
                    "https://habrastorage.org/webt/u-/hv/nm/u-hvnmcaxiwvqhq99e1fvtnwzso.jpeg"),
                "Школа узбекского языка",
                "Преподаватель узбекского"
            ),
            new Tutor(
                "Елена",
                "Шоколадова",
                "Припять",
                null,
                3.5,
                new Uri(
                    "https://habrastorage.org/webt/dd/wc/nq/ddwcnqlxp758zcle5u4kmuqkoim.jpeg"),
                "Центр исследования диабета",
                "Научный руководитель"
            ),
            new Tutor(
                "Элтон",
                "Джонов",
                "Серов",
                null,
                1,
                new Uri(
                    "https://habrastorage.org/webt/pm/jf/fm/pmjffmvgkjytgldkoeb4xcsvwcq.png"),
                "Школа музыки",
                "Учитель игры на флейте"
            ),
            new Tutor(
                "Александр",
                "Хлебов",
                "Минск",
                null,
                4.7,
                new Uri(
                    "https://habrastorage.org/webt/ul/x8/bv/ulx8bv9boll4rggfc1jjgp8r4ci.jpeg"),
                "Центр подготовки пилотов",
                "Укладчик парашютов"
            ),
            new Tutor(
                "Николай",
                "Вершинин",
                "Екатеринбург",
                null,
                4.1,
                null,
                "Яндекс",
                "Фронтенд разработчик"
            )
        };
        
        return Task.FromResult(new Page<Tutor>(tutors, tutors.Length));
    }
}