using PruebaTecnicaAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors();

builder.Services.AddControllers();
 
builder.Services.AddDbContext<PruebaTecnicaContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("dbconn")));


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors(options =>
    {
        options.WithOrigins("http://localhost:3000");
        options.AllowAnyMethod();
        options.AllowAnyHeader();
    });  
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
