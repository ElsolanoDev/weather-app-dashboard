# Weather App Dashboard

A modern weather dashboard built with **React + TypeScript** for the frontend and **ASP.NET Core 8 Web API** for the backend. This application provides real-time weather updates, including current conditions, hourly forecasts, and past weather data, utilizing the **WeatherAPI.com** service.

-----------------------------------------------

## Features

- **Real-time weather updates** by location
- **Current conditions**: temperature, humidity, wind speed, UV index
- **Hourly and 5-day forecasts**
- **Sunrise and sunset times**
- **Dark/light theme toggle**
- **Current location detection** via browser geolocation

-----------------------------------------------

## Tech Stack

**Frontend:**

- React + TypeScript
- Bootstrap 5 / SCSS
- Context API for state management

**Backend:**

- ASP.NET Core 8 Web API
- C# DTO models
- Integration with WeatherAPI.com

-----------------------------------------------

## Project Structure

```
/weather-app-dashboard
│
├── backend/ # .NET Web API
│ ├── Controllers/
│ ├── Models/
│ ├── Services/
│ ├── WeatherAPI.cs
│ └── WeatherApp.API.csproj
│
├── frontend/ # React + TypeScript app
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ ├── types/
│ │ └── App.tsx
│ ├── public/
│ └── package.json
│
└── README.md
```

-----------------------------------------------
## Setup & Run

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```
   
2. Open the appSettings.json file and change **"<your-api-key>"** with an actual api key from **WeatherAPI.com** that you own.
3. Run the application:
   
  ```bash
  dotnet run
```

4. The application should run in **https://localhost:7269** or **http://localhost:5162**. You can change the ports by modifiying the **Properties\launchSettings.json** file.

**Note:** If the port is changed, you need to upload the reference in the **weather-dashboard-app\frontend\src\services\WeatherService.ts** file too.

### Frontend

5. Navigate to **frontendt** directory:

```bash
cd frontend
```

6. Install dependencies:

```bash
npm install
```

7. Start the application:

```bash
npm run dev
```
The frontend will be accessible at **http://localhost:3000**.

-----------------------------------------------

## Credits ##

**Design**: Adapted from <a href="https://www.figma.com/design/LADJXj2ShIBYIJCto11lFm/Weather-Dashboard--Community-" target="_blank">Weather Dashboard UI – Figma Community</a>

**Weather Data**: Powered by https://WeatherAPI.com

**Icons**: Solar Icon Set

-----------------------------------------------

## License ##

This project is licensed under the MIT License — see the <a href="./LICENSE" target="_blank">LICENSE</a> file for details.

-----------------------------------------------

## Contact ##

Created by Elias Solano

[Email Me](elsolanog3@gmail.com)
