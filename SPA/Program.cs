using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SPA.Data;
using SPA.Extensions;
using SPA.Identity;
using SPA.Identity.Models;
using SPA.Startup;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.SetUpServices(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddLogging(configure =>
{
    configure.AddConsole();
});

builder.Services.AddHostedService<DatabaseStartupService<ApplicationIdentityContext>>();
builder.Services.AddHostedService<DatabaseStartupService<ApplicationContext>>();

builder.Services.AddSwaggerGen();

/* Identity */
builder.Services
    .AddDbContext<ApplicationIdentityContext>(config =>
    {
        config.UseNpgsql(builder.Configuration.GetConnectionString("Identity"));
    })
    .AddIdentity<ApplicationUser, IdentityRole<Guid>>()
    .AddEntityFrameworkStores<ApplicationIdentityContext>();

builder.Services.AddAuthentication()
    .AddCookie()
    .AddGoogle(options =>
    {
        options.ClientId = "1"; // TODO
        options.ClientSecret = "1"; // TODO
    })
    .AddOAuth("Vk", options =>
    {
        options.ClientId = "1"; // TODO
        options.ClientSecret = "1"; // TODO
        options.ClaimsIssuer = "Vk";
        options.CallbackPath = new PathString("/signin-vk");
        options.AuthorizationEndpoint = "https://oauth.vk.com/authorize";
        options.TokenEndpoint = "https://oauth.vk.com/access_token";
        options.Scope.Add("email");
        options.ClaimActions.MapJsonKey(ClaimTypes.NameIdentifier, "user_id");
        options.ClaimActions.MapJsonKey(ClaimTypes.Email, "email");
        options.SaveTokens = true;
        options.Events = new OAuthEvents
        {
            OnCreatingTicket = context =>
            {
                context.RunClaimActions(context.TokenResponse.Response.RootElement);
                return Task.CompletedTask;
            }
        };
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

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(configure => { configure.MapControllers(); });

//app.MapFallbackToFile("index.html");

app.Run();