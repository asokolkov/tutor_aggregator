using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SPA.Migrations
{
    public partial class NewTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubjectEntity_Tutors_TutorEntityId",
                table: "SubjectEntity");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SubjectEntity",
                table: "SubjectEntity");

            migrationBuilder.RenameTable(
                name: "SubjectEntity",
                newName: "Subjects");

            migrationBuilder.RenameIndex(
                name: "IX_SubjectEntity_TutorEntityId",
                table: "Subjects",
                newName: "IX_Subjects_TutorEntityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_Tutors_TutorEntityId",
                table: "Subjects",
                column: "TutorEntityId",
                principalTable: "Tutors",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_Tutors_TutorEntityId",
                table: "Subjects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects");

            migrationBuilder.RenameTable(
                name: "Subjects",
                newName: "SubjectEntity");

            migrationBuilder.RenameIndex(
                name: "IX_Subjects_TutorEntityId",
                table: "SubjectEntity",
                newName: "IX_SubjectEntity_TutorEntityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SubjectEntity",
                table: "SubjectEntity",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_SubjectEntity_Tutors_TutorEntityId",
                table: "SubjectEntity",
                column: "TutorEntityId",
                principalTable: "Tutors",
                principalColumn: "Id");
        }
    }
}
