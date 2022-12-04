namespace SPA.V1.DataModels;

using Models;

internal sealed class V1ContactDto
{
    public ContactType Type { get; set; }

    public string Contact { get; set; }
}