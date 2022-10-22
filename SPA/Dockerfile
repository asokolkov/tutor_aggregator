FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y npm        

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SPA/SPA.csproj", "SPA/"]
RUN dotnet restore "SPA/SPA.csproj"
COPY . .
WORKDIR "/src/SPA"
RUN dotnet build "SPA.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SPA.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SPA.dll"]
