#nullable enable

namespace SPA.Repositories.Impl;

using AutoMapper;
using Domain;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;

public sealed class LocationsRepository : ILocationsRepository
{
    private readonly ApplicationContext context;
    private readonly IMapper mapper;

    public LocationsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<Location?> GetAsync(Guid id)
    {
        return mapper.Map<Location>(await context.Locations.FindAsync(id));
    }
    
    public async Task<List<Location>> GetAsync()
    {
        var entities = await context.Locations
            .OrderBy(e => e.Id)
            .ToListAsync();
        return mapper.Map<List<Location>>(entities);
    }
    
    public async Task<Location?> InsertAsync(Location location)
    {
        try
        {
            var entity = mapper.Map<LocationEntity>(location);
            var entry = await context.Locations.AddAsync(entity);
            await context.SaveChangesAsync();
            return mapper.Map<Location>(entry.Entity);
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public async Task<Location?> UpdateAsync(Location location)
    {
        try
        {
            var entity = mapper.Map<LocationEntity>(location);
            var entry = context.Locations.Update(entity);
            await context.SaveChangesAsync();
            return mapper.Map<Location>(entry.Entity);
        }
        catch (Exception e)
        {
            return null;
        }
    }
}