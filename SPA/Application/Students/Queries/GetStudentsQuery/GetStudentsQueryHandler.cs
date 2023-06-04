﻿#nullable enable
using JetBrains.Annotations;
using MediatR;
using SPA.Repositories;

namespace SPA.Application.Students.Queries.GetStudentsQuery;

using Domain;

[UsedImplicitly]
public class GetStudentsQueryHandler : IRequestHandler<GetStudentsQuery, Page<Student>>
{
    private readonly IStudentsRepository repository;

    public GetStudentsQueryHandler(IStudentsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Page<Student>> Handle(GetStudentsQuery request, CancellationToken cancellationToken)
    {
        return await repository.GetPageAsync(request.PageNumber, request.PageSize);
    }
}