# TutorAggragator

# Зависимости

- .NET 6.0
- Node.js 18.12.0


# Запуск проекта для разработки

## Первый запуск

```sh
 dotnet tool install --global dotnet-ef
 git clone https://git.66bit.ru/urfu2022/fiit/tutoraggregator
 cd /tutoraggregator
```

## После изменения моделей

- Удалить все таблицы из контейнера
- Cгненерировать путсые таблицы `dotnet run --project SPA`
- Cгенерировать данные `dotnet run --project Tools.DataGenerator`

## Docker
Перед началом разработки нужно поднять докер контейнер
`docker-compose up -d`

После окончания контейнер можно остановить
`docker-compose down`


## Генерация моделей

```sh
dotnet run --project Tools.DataGenerator
```

## Бэкенд
   ```sh
   dotnet run --project SPA
   ```

## Фронтенд
   ```sh
   dotnet run --project SPA
   ```

- Перейдите по адресу `https://localhost:7077`
- Дождитесь запуска `SPA proxy`
- По адресу `https://localhost:44454` будет находится фронтенд

## Swagger UI 

`https://localhost:7077/swagger/index.html`
   