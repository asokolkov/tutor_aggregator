// using AutoMapper;
// using MediatR;
// using Microsoft.AspNetCore.Mvc;
// using NSubstitute;
// using NUnit.Framework;
// using SPA.Application.Students.Queries.GetStudentQuery;
// using SPA.Domain;
// using SPA.V1.Controllers;
// using SPA.V1.DataModels;
//
// namespace Tests.SPA;
//
// public class StudentsControllerTests
// {
//     [SetUp]
//     public void Setup()
//     {
//         
//     }
//
//     [Test]
//     public async Task Test1()
//     {
//         var id = Guid.NewGuid();
//         // Arrange
//         var mediator = Substitute.For<IMediator>();
//         var mapper = Substitute.For<IMapper>();
//         var controller = new V1StudentsController(mediator, mapper);
//         var student = new Student { Id = id, Age = 1, Contacts = new List<StudentContact>(), Description = "A", Education = null, Lessons = new List<Lesson>(), Reviews = new List<Review>(), FirstName = "A", LastName = "A" };
//         var studentDto = new V1StudentDto {Id = id.ToString(), Age = 1, Contacts = new List<V1StudentContactDto>(), Description = "A", Education = null, FirstName = "A", LastName = "A"};
//         mediator.Send(Arg.Any<GetStudentQuery>()).Returns(student);
//         mapper.Map<V1StudentDto>(student).Returns(studentDto);
//
//         // Act
//         var result = await controller.Get(Guid.NewGuid());
//
//         // Assert
//         Assert.IsInstanceOf<OkObjectResult>(result);
//         var okResult = (OkObjectResult)result;
//         Assert.AreEqual(studentDto, okResult.Value);
//         mediator.Received(1).Send(Arg.Any<GetStudentQuery>());
//         mapper.Received(1).Map<V1StudentDto>(student);
//     }
// }