namespace SPA.ApiErrors;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

internal class ApiErrorResult : ActionResult, IStatusCodeActionResult
{
    public ApiErrorResult(string error, int statusCode)
    {
        Error = error;
        StatusCode = statusCode;
    }

    public string Error { get; }

    public int? StatusCode { get; }

    public override Task ExecuteResultAsync(ActionContext context)
    {
        if (context == null)
            throw new ArgumentNullException(nameof(context));

        var services = context.HttpContext.RequestServices;
        var executor = services.GetRequiredService<IActionResultExecutor<ApiErrorResult>>();

        return executor.ExecuteAsync(context, this);
    }
}