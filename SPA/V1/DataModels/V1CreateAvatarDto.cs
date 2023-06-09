namespace SPA.V1.DataModels;

using JetBrains.Annotations;

[PublicAPI]
public sealed class V1CreateAvatarDto
{
    public IFormFile Avatar { get; set; }
    
    public string Name { get; set; }
    
    public string Filename { get; set; }
}