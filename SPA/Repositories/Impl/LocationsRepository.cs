namespace SPA.Repositories.Impl;

using AutoMapper;
using Data;
using Domain;
using Entities;
using Microsoft.EntityFrameworkCore;

internal sealed class LocationsRepository : ILocationsRepository
{
    private readonly ApplicationContext context;
    private readonly DbSet<LocationEntity> table;
    private readonly IMapper mapper;

    public LocationsRepository(ApplicationContext context, IMapper mapper)
    {
        this.context = context;
        this.mapper = mapper;
        table = context.Locations;
    }

    public async Task<Page<Location>> Get(int page, int size)
    {
        var tutorEntities = await table
            .OrderBy(e => e.Id)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();

        var locations = mapper.Map<List<Location>>(tutorEntities);
        return new Page<Location>(locations);
    }

    public async Task<Location> Get(Guid id)
    {
        return mapper.Map<Location>(await table.FindAsync(id));
    }

    public async Task<Location> Update(Location location)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeUpdate");
        try
        {
            var tutorEntity = mapper.Map<LocationEntity>(location);
            var entityEntry = table.Update(tutorEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Location>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeUpdate");
            return default;
        }
    }

    public async Task<Location> Insert(Location location)
    {
        await using var transaction = await context.Database.BeginTransactionAsync();
        await transaction.CreateSavepointAsync("BeforeInsert");
        try
        {
            var tutorEntity = mapper.Map<LocationEntity>(location);
            var entityEntry = await table.AddAsync(tutorEntity);
            await context.SaveChangesAsync();
            await transaction.CommitAsync();
            return mapper.Map<Location>(entityEntry.Entity);
        }
        catch (Exception)
        {
            await transaction.RollbackToSavepointAsync("BeforeInsert");
            return default;
        }
    }
}