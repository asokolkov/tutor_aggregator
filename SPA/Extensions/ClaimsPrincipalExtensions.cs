namespace SPA.Extensions;

using System.Security.Claims;

internal static class ClaimsPrincipalExtensions
{
    public static Guid? GetId(this ClaimsPrincipal claimsPrincipal)
    {
        var id = claimsPrincipal.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
        return Guid.TryParse(id, out var guid) ? guid : default(Guid?);
    }
}