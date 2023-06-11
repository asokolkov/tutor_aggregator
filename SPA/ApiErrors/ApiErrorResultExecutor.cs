namespace SPA.ApiErrors;

using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

[UsedImplicitly]
internal sealed class ApiErrorResultExecutor : IActionResultExecutor<ApiErrorResult>
{
    private readonly IActionResultExecutor<JsonResult> jsonResultExecutor;

    public ApiErrorResultExecutor(IActionResultExecutor<JsonResult> jsonResultExecutor)
    {
        this.jsonResultExecutor = jsonResultExecutor;
    }

    public Task ExecuteAsync(ActionContext context, ApiErrorResult result)
    {
        var jsonResult = new JsonResult(result.Error)
        {
            StatusCode = result.StatusCode
        };

        return jsonResultExecutor.ExecuteAsync(context, jsonResult);
    }
}