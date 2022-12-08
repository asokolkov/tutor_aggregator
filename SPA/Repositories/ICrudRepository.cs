﻿using Microsoft.AspNetCore.JsonPatch;

namespace SPA.Repositories;

using Models;

public interface ICrudRepository<T>
{
    Task<Page<T>> Get();
    
    Task<Page<T>> Get(long page, long size);
    
    Task<T> Get(int id);
    
    void Update(T element);
    
    void Insert(T tutor);
}