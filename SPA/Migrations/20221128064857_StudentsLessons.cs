using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SPA.Migrations
{
    public partial class StudentsLessons : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TutorId",
                table: "Lessons",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "Lessons",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.CreateIndex(
                name: "IX_Lessons_StudentId",
                table: "Lessons",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Lessons_TutorId",
                table: "Lessons",
                column: "TutorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Students_StudentId",
                table: "Lessons",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Tutors_TutorId",
                table: "Lessons",
                column: "TutorId",
                principalTable: "Tutors",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Students_StudentId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Tutors_TutorId",
                table: "Lessons");

            migrationBuilder.DropIndex(
                name: "IX_Lessons_StudentId",
                table: "Lessons");

            migrationBuilder.DropIndex(
                name: "IX_Lessons_TutorId",
                table: "Lessons");

            migrationBuilder.AlterColumn<int>(
                name: "TutorId",
                table: "Lessons",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StudentId",
                table: "Lessons",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);
        }
    }
}
