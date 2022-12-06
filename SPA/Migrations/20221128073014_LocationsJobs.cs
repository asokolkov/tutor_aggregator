using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace SPA.Migrations
{
    public partial class LocationsJobs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JobPlace",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "JobPost",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Tutors");

            migrationBuilder.AddColumn<int>(
                name: "JobId",
                table: "Tutors",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LocationId",
                table: "Tutors",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Place = table.Column<string>(type: "text", nullable: true),
                    Post = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    City = table.Column<string>(type: "text", nullable: true),
                    District = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tutors_JobId",
                table: "Tutors",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_Tutors_LocationId",
                table: "Tutors",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_Jobs_JobId",
                table: "Tutors",
                column: "JobId",
                principalTable: "Jobs",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_Locations_LocationId",
                table: "Tutors",
                column: "LocationId",
                principalTable: "Locations",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_Jobs_JobId",
                table: "Tutors");

            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_Locations_LocationId",
                table: "Tutors");

            migrationBuilder.DropTable(
                name: "Jobs");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Tutors_JobId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Tutors_LocationId",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "JobId",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "Tutors");

            migrationBuilder.AddColumn<string>(
                name: "JobPlace",
                table: "Tutors",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobPost",
                table: "Tutors",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Tutors",
                type: "text",
                nullable: true);
        }
    }
}
