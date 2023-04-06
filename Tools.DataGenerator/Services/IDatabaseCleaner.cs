namespace Tools.DataGenerator.Services;

internal interface IDatabaseCleaner
{
    Task CleanupDatabase();
}