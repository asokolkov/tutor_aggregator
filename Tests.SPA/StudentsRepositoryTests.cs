using AutoMapper;
using EFCore.Postgres.Application.Contexts;
using EFCore.Postgres.Application.Models.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NSubstitute;
using NUnit.Framework;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Domain;
using SPA.Repositories.Impl;
using SPA.V1.Controllers;
using SPA.V1.DataModels;

namespace Tests.SPA;

public class StudentsRepositoryTests
{
    [SetUp]
    public void Setup()
    {
        
    }

    [Test]
    public async Task Test1()
    {
        var id = Guid.NewGuid();
        var data = new List<StudentEntity>
        {
            new() { Id = id, Age = 1, Contacts = new List<StudentContactEntity>(), Description = "A", Education = null, Lessons = new List<LessonEntity>(), Reviews = new List<ReviewEntity>(), FirstName = "A", LastName = "A" }
        }.AsQueryable();
        
        var mockSet = Substitute.For<DbSet<StudentEntity>, IQueryable<StudentEntity>>();
        ((IQueryable<StudentEntity>)mockSet).Provider.Returns(data.Provider);
        ((IQueryable<StudentEntity>)mockSet).Expression.Returns(data.Expression);
        ((IQueryable<StudentEntity>)mockSet).ElementType.Returns(data.ElementType);
        ((IQueryable<StudentEntity>)mockSet).GetEnumerator().Returns(data.GetEnumerator());

        var mockContext = Substitute.For<IApplicationContext>();
        var mockMapper = Substitute.For<IMapper>();
        mockContext.Students.FindAsync(id).Returns(data.FirstOrDefault(s => s.Id == id));

        var service = new StudentsRepository(mockContext, mockMapper);

        var secondPerson = await service.GetAsync(id);

        Assert.That(secondPerson.Id, Is.EqualTo(id));
    }
}