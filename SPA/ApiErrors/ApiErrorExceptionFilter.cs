namespace SPA.ApiErrors;

using Exceptions;
using FluentValidation;
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
                context.Result = new ApiErrorResult(string.Join(",", validationException.Errors), StatusCodes.Status422UnprocessableEntity);
                context.ExceptionHandled = true;
                break;
            case ConflictException conflictException:
                context.Result = new ApiErrorResult(conflictException.Message, StatusCodes.Status409Conflict);
                context.ExceptionHandled = true;
                break;
            case BadRequestException badRequestException:
                context.Result = new ApiErrorResult(badRequestException.Message, StatusCodes.Status400BadRequest);
                context.ExceptionHandled = true;
                break;
        }
    }
}