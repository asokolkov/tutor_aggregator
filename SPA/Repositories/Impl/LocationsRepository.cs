namespace SPA.Repositories.Impl;

using AutoMapper;
using Domain;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using Microsoft.EntityFrameworkCore;

internal sealed class LocationsRepository : ILocationsRepository
{
    private readonly IApplicationContext context;
    private readonly IMapper mapper;

    public LocationsRepository(IApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
    }

    public async Task<List<Location>> GetAsync()
    {
        var entities = await context.Locations
            .OrderBy(e => e.Id)
            .ToListAsync();
        return mapper.Map<List<Location>>(entities);
    }

    public async Task<Location> Get(Guid id)
    {
        return mapper.Map<Location>(await context.Locations.FindAsync(id));
    }

    public async Task<Location> Update(Location location)
    {
        var tutorEntity = mapper.Map<LocationEntity>(location);
        var entityEntry = context.Locations.Update(tutorEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Location>(entityEntry.Entity);
    }

    public async Task<Location> Insert(Location location)
    {
        var tutorEntity = mapper.Map<LocationEntity>(location);
        var entityEntry = await context.Locations.AddAsync(tutorEntity);
        await context.SaveChangesAsync();
        return mapper.Map<Location>(entityEntry.Entity);
    }
}