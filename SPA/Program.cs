using System.Security.Claims;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Extensions;
using EFCore.Postgres.Identity;
using EFCore.Postgres.Identity.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Converters;
using SPA.Authorization;
using SPA.Authorization.Requirements;
using SPA.Authorization.Requirements.Impl;
using SPA.Extensions;
using SPA.Identity;
using SPA.Startup;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddNewtonsoftJson(builder =>
        builder.SerializerSettings.Converters.Add(new StringEnumConverter()));
builder.Services.SetUpServices(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddLogging(configure => { configure.AddConsole(); });

builder.Services.AddHostedService<DatabaseStartupService<ApplicationIdentityContext>>();
builder.Services.AddHostedService<DatabaseStartupService<ApplicationContext>>();

builder.Services
    .AddSwaggerGen()
    .AddSwaggerGenNewtonsoftSupport();

/* Identity */
builder.Services
    .AddIdentityContext(builder.Configuration.GetConnectionString("Identity"))
    .AddIdentity<ApplicationUser, IdentityRole<Guid>>()
    .AddErrorDescriber<CustomIdentityErrorDescriber>()
    .AddEntityFrameworkStores<ApplicationIdentityContext>();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.Name = "auth_cookie";
    options.Cookie.SameSite = SameSiteMode.None;

    options.Events.OnRedirectToLogin = context =>
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
    };
    options.Events.OnRedirectToAccessDenied = context =>
    {
        context.Response.StatusCode = StatusCodes.Status403Forbidden;
        return Task.CompletedTask;
    };
});

// builder.Services.AddAuthentication()
//     .AddGoogle(options =>
//     {
//         options.ClientId = builder.Configuration["Authentication:Google:ClientId"];
//         options.ClientSecret = builder.Configuration["Authentication:Google:ClientSecret"];
//     })
//     .AddOAuth("Vk", options =>
//     {
//         options.ClientId = builder.Configuration["Authentication:Vk:ClientId"];
//         options.ClientSecret = builder.Configuration["Authentication:Vk:ClientSecret"];
//         options.ClaimsIssuer = "Vk";
//         options.CallbackPath = new PathString("/signin-vk");
//         options.AuthorizationEndpoint = "https://oauth.vk.com/authorize";
//         options.TokenEndpoint = "https://oauth.vk.com/access_token";
//         options.Scope.Add("email");
//         options.ClaimActions.MapJsonKey(ClaimTypes.NameIdentifier, "user_id");
//         options.ClaimActions.MapJsonKey(ClaimTypes.Email, "email");
//         options.SaveTokens = true;
//         options.Events = new OAuthEvents
//         {
//             OnCreatingTicket = context =>
//             {
//                 context.RunClaimActions(context.TokenResponse.Response.RootElement);
//                 return Task.CompletedTask;
//             }
//         };
//     });

builder.Services.AddAuthorization(
    authorization =>
    {
        authorization.AddPolicy(
            Policies.CreateLessonPolicy,
            policy => { policy.AddRequirements(new CreateLessonRequirement()); });
        authorization.AddPolicy(
            Policies.DeleteLessonPolicy,
            policy => { policy.AddRequirements(new DeleteLessonRequirement()); });
        authorization.AddPolicy(
            Policies.CancelLessonPolicy,
            policy => { policy.AddRequirements(new CancelLessonRequirement()); });
        authorization.AddPolicy(
            Policies.BookLessonPolicy,
            policy => { policy.AddRequirements(new BookLessonRequirement()); });
        authorization.AddPolicy(
            Policies.CreateReviewPolicy,
            policy => { policy.AddRequirements(new CreateReviewRequirement()); });
    });

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(configure => { configure.MapControllers(); });

//app.MapFallbackToFile("index.html");

app.Run();