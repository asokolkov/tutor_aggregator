using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace SPA.Migrations
{
    public partial class LessonAndStudentDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Award_Tutors_TutorId",
                table: "Award");

            migrationBuilder.DropForeignKey(
                name: "FK_Contact_Tutors_TutorId",
                table: "Contact");

            migrationBuilder.DropForeignKey(
                name: "FK_Education_Tutors_TutorId",
                table: "Education");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Education",
                table: "Education");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Contact",
                table: "Contact");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Award",
                table: "Award");

            migrationBuilder.DropColumn(
                name: "Subjects",
                table: "Tutors");

            migrationBuilder.RenameTable(
                name: "Education",
                newName: "Educations");

            migrationBuilder.RenameTable(
                name: "Contact",
                newName: "Contacts");

            migrationBuilder.RenameTable(
                name: "Award",
                newName: "Awards");

            migrationBuilder.RenameIndex(
                name: "IX_Education_TutorId",
                table: "Educations",
                newName: "IX_Educations_TutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Contact_TutorId",
                table: "Contacts",
                newName: "IX_Contacts_TutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Award_TutorId",
                table: "Awards",
                newName: "IX_Awards_TutorId");

            migrationBuilder.AddColumn<int>(
                name: "StudentId",
                table: "Contacts",
                type: "integer",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Educations",
                table: "Educations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contacts",
                table: "Contacts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Awards",
                table: "Awards",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Lessons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    TutorId = table.Column<int>(type: "integer", nullable: false),
                    StudentId = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    Confirmed = table.Column<bool>(type: "boolean", nullable: false),
                    StartTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    EndTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lessons", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    MiddleName = table.Column<string>(type: "text", nullable: false),
                    Avatar = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Subject",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Description = table.Column<string>(type: "text", nullable: true),
                    TutorId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subject", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subject_Tutors_TutorId",
                        column: x => x.TutorId,
                        principalTable: "Tutors",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_StudentId",
                table: "Contacts",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Subject_TutorId",
                table: "Subject",
                column: "TutorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Awards_Tutors_TutorId",
                table: "Awards",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Students_StudentId",
                table: "Contacts",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Tutors_TutorId",
                table: "Contacts",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Educations_Tutors_TutorId",
                table: "Educations",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Awards_Tutors_TutorId",
                table: "Awards");

            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Students_StudentId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Tutors_TutorId",
                table: "Contacts");

            migrationBuilder.DropForeignKey(
                name: "FK_Educations_Tutors_TutorId",
                table: "Educations");

            migrationBuilder.DropTable(
                name: "Lessons");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Subject");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Educations",
                table: "Educations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Contacts",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_StudentId",
                table: "Contacts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Awards",
                table: "Awards");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Contacts");

            migrationBuilder.RenameTable(
                name: "Educations",
                newName: "Education");

            migrationBuilder.RenameTable(
                name: "Contacts",
                newName: "Contact");

            migrationBuilder.RenameTable(
                name: "Awards",
                newName: "Award");

            migrationBuilder.RenameIndex(
                name: "IX_Educations_TutorId",
                table: "Education",
                newName: "IX_Education_TutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Contacts_TutorId",
                table: "Contact",
                newName: "IX_Contact_TutorId");

            migrationBuilder.RenameIndex(
                name: "IX_Awards_TutorId",
                table: "Award",
                newName: "IX_Award_TutorId");

            migrationBuilder.AddColumn<List<string>>(
                name: "Subjects",
                table: "Tutors",
                type: "text[]",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Education",
                table: "Education",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Contact",
                table: "Contact",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Award",
                table: "Award",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Award_Tutors_TutorId",
                table: "Award",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Contact_Tutors_TutorId",
                table: "Contact",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Education_Tutors_TutorId",
                table: "Education",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");
        }
    }
}
