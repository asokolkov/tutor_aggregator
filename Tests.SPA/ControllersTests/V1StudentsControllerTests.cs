using System.Security.Claims;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using NUnit.Framework;
using SPA.Application.Students.Commands.UpdateStudentCommand;
using SPA.Application.Students.Queries.GetStudentQuery;
using SPA.Application.Students.Queries.GetStudentsQuery;
using SPA.Domain;
using SPA.V1.Controllers;
using SPA.V1.DataModels;

namespace Tests.SPA.ControllersTests;

internal sealed class V1StudentsControllerTests
{
    private IMediator mediator = null!;
    private IMapper mapper = null!;
    private LinkGenerator linkGenerator = null!;
    private V1StudentsController controller = null!;

    [SetUp]
    public void SetUp()
    {
        mediator = Substitute.For<IMediator>();
        mapper = Substitute.For<IMapper>();
        linkGenerator = Substitute.For<LinkGenerator>();
        controller = new V1StudentsController(mediator, mapper, linkGenerator);
    }

    [Test]
    public async Task Get_ValidId_ReturnsV1StudentDto()
    {
        var id = Guid.NewGuid();
        var query = new GetStudentQuery(id);
        var model = new Student();
        var dto = new V1StudentDto();

        mediator.Send(query).Returns(model);
        mapper.Map<V1StudentDto>(model).Returns(dto);
        
        var result = await controller.Get(id);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<OkObjectResult>());
            Assert.That(((OkObjectResult)result).Value, Is.EqualTo(dto));
        });
    }
    
    [Test]
    public async Task Get_InvalidId_ReturnsNotFound()
    {
        var id = Guid.NewGuid();
        var query = new GetStudentQuery(id);
   
        mediator.Send(query).ReturnsNull();
   
        var result = await controller.Get(id);
   
        Assert.That(result, Is.InstanceOf<NotFoundResult>());
    }
    
    [Test]
    public async Task GetPage_ValidPageAndSize_ReturnsV1PageDto()
    {
        const int page = 0;
        const int size = 1;
        var query = new GetStudentsQuery(page, size);
        var modelsPage = new Page<Student>(new List<Student>(), 0, page, size);
        var dtoPage = new V1PageDto<V1StudentDto> { Items = new List<V1StudentDto>(), TotalCount = 0 };
   
        mediator.Send(query).Returns(modelsPage);
        mapper.Map<V1PageDto<V1StudentDto>>(modelsPage).Returns(dtoPage);
        
        var httpResponse = Substitute.For<HttpResponse>();
        httpResponse.Headers.Returns(new HeaderDictionary());
        var httpContext = Substitute.For<HttpContext>();
        httpContext.Response.Returns(httpResponse);
        controller.ControllerContext.HttpContext = httpContext;
   
        var result = await controller.GetPage(page, size);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<OkObjectResult>());
            Assert.That(((OkObjectResult)result).Value, Is.EqualTo(dtoPage));
        });
    }
    
    [Test]
    public async Task GetPage_PageLessThan0_ReturnsBadRequest()
    {
        const int page = -1;
        const int size = 1;
   
        var result = await controller.GetPage(page, size);
   
        Assert.That(result, Is.InstanceOf<BadRequestObjectResult>());
    }
    
    [Test]
    public async Task GetPage_SizeLessThan1_ReturnsBadRequest()
    {
        const int page = 0;
        const int size = 0;
   
        var result = await controller.GetPage(page, size);
   
        Assert.That(result, Is.InstanceOf<BadRequestObjectResult>());
    }
    
    [Test]
    public async Task GetPage_EmptyPaginationLinks_ReturnsV1PageDto()
    {
        const int page = 0;
        const int size = 1;
        var query = new GetStudentsQuery(page, size);
        var modelsPage = new Page<Student>(new List<Student>(), 0, page, size);
        var dtoPage = new V1PageDto<V1StudentDto> { Items = new List<V1StudentDto>(), TotalCount = 0 };
   
        mediator.Send(query).Returns(modelsPage);
        mapper.Map<V1PageDto<V1StudentDto>>(modelsPage).Returns(dtoPage);
        
        var httpResponse = Substitute.For<HttpResponse>();
        httpResponse.Headers.Returns(new HeaderDictionary());
        var httpContext = Substitute.For<HttpContext>();
        httpContext.Response.Returns(httpResponse);
        controller.ControllerContext.HttpContext = httpContext;
   
        var result = await controller.GetPage(page, size);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<OkObjectResult>());
            Assert.That(((OkObjectResult)result).Value, Is.EqualTo(dtoPage));
            Assert.That(controller.Response.Headers.ContainsKey("X-Pagination"), Is.True);
            Assert.That(controller.Response.Headers["X-Pagination"], Is.EqualTo("{\"previousPageLink\":null,\"nextPageLink\":null}"));
        });
    }
    
    [Test]
    public async Task GetPage_FirstPagePaginationLinks_ReturnsV1PageDto()
    {
        throw new NotImplementedException();
    }
    
    [Test]
    public async Task GetPage_SecondPagePaginationLinks_ReturnsV1PageDto()
    {
        throw new NotImplementedException();
    }
    
    [Test]
    public async Task GetPage_LastPagePaginationLinks_ReturnsV1PageDto()
    {
        throw new NotImplementedException();
    }
    
    [Test]
    public async Task GetPage_AfterLastPagePaginationLinks_ReturnsV1PageDto()
    {
        throw new NotImplementedException();
    }
    
    [Test]
    public async Task Update_UnauthorisedUser_ReturnsUnauthorised()
    {
        var id = Guid.NewGuid();
        var old = new V1UpdateStudentDto();
        var updateStudent = new UpdateStudent();
        var student = new Student();
        var dto = new V1StudentDto();
    
        var query = new UpdateStudentCommand(id, updateStudent);
        mediator.Send(query).Returns(student);
        mapper.Map<UpdateStudent>(old).Returns(updateStudent);
        mapper.Map<V1StudentDto>(student).Returns(dto);
        controller.ControllerContext.HttpContext = new DefaultHttpContext
        {
            User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[] { new(ClaimTypes.NameIdentifier, "") }))
        };
    
        var result = await controller.Update(old);
        
        Assert.That(result, Is.InstanceOf<UnauthorizedResult>());
    }
    
    [Test]
    public async Task Update_ValidV1UpdateStudentDto_ReturnsV1StudentDto()
    {
        var id = Guid.NewGuid();
        var old = new V1UpdateStudentDto();
        var updateStudent = new UpdateStudent();
        var student = new Student();
        var dto = new V1StudentDto();
    
        var query = new UpdateStudentCommand(id, updateStudent);
        mediator.Send(query).Returns(student);
        mapper.Map<UpdateStudent>(old).Returns(updateStudent);
        mapper.Map<V1StudentDto>(student).Returns(dto);
        controller.ControllerContext.HttpContext = new DefaultHttpContext
        {
            User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[] { new(ClaimTypes.NameIdentifier, id.ToString()) }))
        };
    
        var result = await controller.Update(old);
        
        Assert.Multiple(() =>
        {
            Assert.That(result, Is.InstanceOf<OkObjectResult>());
            Assert.That(((OkObjectResult)result).Value, Is.EqualTo(dto));
        });
    }
    
    [Test]
    public async Task Update_InvalidV1UpdateStudentDto_ReturnsNotFound()
    {
        var id = Guid.NewGuid();
        var old = new V1UpdateStudentDto();
        var updateStudent = new UpdateStudent();
        var student = new Student();
        var dto = new V1StudentDto();
    
        var query = new UpdateStudentCommand(id, updateStudent);
        mediator.Send(query).ReturnsNull();
        mapper.Map<UpdateStudent>(old).Returns(updateStudent);
        mapper.Map<V1StudentDto>(student).Returns(dto);
        controller.ControllerContext.HttpContext = new DefaultHttpContext
        {
            User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[] { new(ClaimTypes.NameIdentifier, id.ToString()) }))
        };
    
        var result = await controller.Update(old);
        
        Assert.That(result, Is.InstanceOf<NotFoundResult>());
    }
}