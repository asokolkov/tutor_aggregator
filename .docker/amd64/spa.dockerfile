FROM mcr.microsoft.com/dotnet/aspnet:6.0-bullseye-slim as base

# Build
FROM mcr.microsoft.com/dotnet/sdk:6.0-bullseye-slim as build
WORKDIR /app

## Install global tools
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    nodejs \
    && npm install -g yarn \
    && rm -rf /var/libs/apt/lists/* 

## Install .NET Core global CLI diagnostic tools && dotTrace Command-Line Profiler tool
RUN dotnet tool install --tool-path /tools dotnet-trace \
    && dotnet tool install --tool-path /tools dotnet-counters \
    && dotnet tool install --tool-path /tools dotnet-dump \
    && dotnet tool install --tool-path /tools dotnet-wtrace \
    && dotnet tool install --tool-path /tools JetBrains.dotTrace.GlobalTools 

## Restore dependencies of .net core projects taking advantage of docker layer caching \
COPY *.sln ./
COPY ./*/*.csproj ./
RUN for file in $(ls ./*.csproj); do mkdir -p ${file%.*} && mv $file ${file%.*}; done
RUN dotnet restore SPA/SPA.csproj

## Copy everything else and build app
COPY . .
RUN dotnet publish SPA/SPA.csproj -c Release -o /app/publish

## Restore dependencies of npm project taking advantage of docker layer caching
COPY SPA/ClientApp/package.json ./SPA/ClientApp

RUN npm install --non-interactive ./SPA/ClientApp

# Finalize
FROM base AS final

WORKDIR /tools
COPY --from=build /tools .

WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Production
ENV DOTNET_ENVIRONMENT=Production
ENV DOTNET_HOSTBUILDER__RELOADCONFIGONCHANGE=false

ENTRYPOINT ["dotnet", "SPA.dll"]
