using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Extensions;
using EFCore.Postgres.Identity;
using EFCore.Postgres.Identity.Models;
using Humanizer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Converters;
using SPA.Authorization;
using SPA.Authorization.Requirements.Impl;
using SPA.Extensions;
using SPA.Identity;
using SPA.Startup;
using SameSiteMode = Microsoft.AspNetCore.Http.SameSiteMode;

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

builder.Services.AddSpaStaticFiles(options => { options.RootPath = "ClientApp/build"; });

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
app.UseSpaStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(configure => { configure.MapControllers(); });

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
    {
        OnPrepareResponse = context =>
        {
            var headers = context.Context.Response.GetTypedHeaders();
            if (context.File.Name != "index.html")
            {
                headers.CacheControl = new CacheControlHeaderValue
                {
                    Public = true,
                    MaxAge = 1.Days()
                };
                return;
            }

            headers.CacheControl = new CacheControlHeaderValue
            {
                NoStore = true,
                NoCache = true
            };
        }
    };

    if (app.Environment.IsDevelopment())
        spa.UseReactDevelopmentServer("start");
});

app.Run();
