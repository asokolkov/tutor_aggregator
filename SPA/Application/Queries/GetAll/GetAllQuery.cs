using MediatR;
using SPA.Models;

namespace SPA.Application.Queries.GetAll;

public class GetAllQuery<T> : IRequest<Page<T>>
{
}