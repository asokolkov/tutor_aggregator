namespace SPA.Exceptions;

internal sealed class ConflictException : Exception
{
    public ConflictException(string message) : base(message)
    {
    }
}