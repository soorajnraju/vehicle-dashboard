# VehicleDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

```cd vehicle-dashboard```

```npm install```

```ng serve```

Open http://localhost:4200/ on your browser

## Docker

```cd vehicle-dashboard```

```docker build -t vehicle-dashboard:dev .```

```docker run -d -p 4200:4200 vehicle-dashboard:dev```

Open http://localhost:4200/ on your browser

## User guide

1. Add new vehicle by inputting uid, name, latitude and longitude (You can pick a location from google map).
2. Edit the newly created vehicle with an updated latitude and longitude (You can pick a nearby point to the current one from google map).
3. Once the latitude and longitude updated the dashboard will show the current speed and last covered distance.