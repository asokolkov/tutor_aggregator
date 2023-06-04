namespace SPA.ApiErrors;

using System.ComponentModel.DataAnnotations;
using Exceptions;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc.Filters;

[UsedImplicitly]
internal sealed class ApiErrorExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        switch (context.Exception)
        {
            case ValidationException validationException:
                context.Result = new ApiErrorResult(validationException.Message, StatusCodes.Status400BadRequest);
                context.ExceptionHandled = true;
                break;
            case ConflictException conflictException:
                context.Result = new ApiErrorResult(conflictException.Message, StatusCodes.Status409Conflict);
                context.ExceptionHandled = true;
                break;
        }
    }
}