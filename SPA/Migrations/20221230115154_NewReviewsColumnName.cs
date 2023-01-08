using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SPA.Migrations
{
    public partial class NewReviewsColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ModificationTime",
                table: "Reviews",
                newName: "UpdatedAt");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "Reviews",
                newName: "ModificationTime");
        }
    }
}
