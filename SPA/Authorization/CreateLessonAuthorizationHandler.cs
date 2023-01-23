namespace SPA.Authorization;

using Extensions;
using Microsoft.AspNetCore.Authorization;
using Repositories;
using Requirements;

internal sealed class CreateLessonAuthorizationHandler : AuthorizationHandler<ICreateLessonRequirement, HttpContext>
{
    private readonly IUserRepository repository;

    public CreateLessonAuthorizationHandler(IUserRepository repository)
    {
        this.repository = repository;
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context,   
        ICreateLessonRequirement requirement,
        HttpContext resource)
    {
        var userId = context.User.GetId();
        if (userId is null)
            return;
        var user = await repository.GetAsync(userId.Value);
        if (user is null)
            return;
        if (requirement.IsUserAuthorized(user))
            context.Succeed(requirement);
    }
}