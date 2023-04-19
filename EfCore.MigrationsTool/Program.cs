using System.Reflection;
using EFCore.Postgres.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace EfCore.MigrationsTool;

public static class Program
{
    public static async Task Main(string[] args)
    {
        await Host.CreateDefaultBuilder(args)
            .ConfigureLogging(builder => builder.AddSimpleConsole())
            .ConfigureHostConfiguration(configurationBuilder =>
            {
                configurationBuilder
                    .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
                    .AddEnvironmentVariables();
            })
            .ConfigureServices((context, services) =>
            {
                services.AddApplicationContext(context.Configuration.GetConnectionString("Postgres"), 
                    Assembly.GetAssembly(typeof(Program))?.FullName);
                services.AddIdentityContext(context.Configuration.GetConnectionString("Identity"),
                    Assembly.GetAssembly(typeof(Program))?.FullName);
            })
            .Build()
            .RunAsync();
    }
}