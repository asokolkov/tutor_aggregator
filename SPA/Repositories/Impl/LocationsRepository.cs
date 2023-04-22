namespace SPA.Repositories.Impl;

using AutoMapper;
using Domain;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
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

    public async Task<List<Location>> GetAsync()
    {
        var entities = await table
            .OrderBy(e => e.Id)
            .ToListAsync();
        return mapper.Map<List<Location>>(entities);
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