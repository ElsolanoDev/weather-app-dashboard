import {
  CloudRainBoldDuotone,
  Sun2BoldDuotone,
  CloudSnowfallBoldDuotone,
  FogBoldDuotone,
  WindBoldDuotone,
} from "solar-icon-set";
import { useWeather } from "../../context/WeatherContext";
import ContentUnavailable from "./SubcontentElements/ContentUnavailable";
import ForecastHour from "./SubcontentElements/ForecastHour";

function ForecastHours() {
  const { weather } = useWeather();
  if (!weather?.forecastHours) {
    return <ContentUnavailable message="No hourly forecast data available" />;
  }

  return (
    <>
      <div className="card main-card flex-fill">
        <div className="card-body">
          <h5 className="card-title">Hourly Forecast:</h5>
          <div className="row">
            {weather?.forecastHours.map((hour) => (
              <div className="col" key={hour.time}>
                <ForecastHour
                  hour={hour.time}
                  weatherIcon={
                    hour.conditionText.toLocaleLowerCase().includes("rain") ? (
                      <CloudRainBoldDuotone size={48} color="#9fcfe6" />
                    ) : hour.conditionText
                        .toLocaleLowerCase()
                        .includes("snow") ? (
                      <CloudSnowfallBoldDuotone size={48} color="#9fcfe6" />
                    ) : hour.conditionText
                        .toLocaleLowerCase()
                        .includes("drizzle") ? (
                      <FogBoldDuotone size={48} color="#9fcfe6" />
                    ) : (
                      <Sun2BoldDuotone size={48} color="#f9d74e" />
                    )
                  }
                  temperature={hour.tempC + "°C"}
                  windIcon={<WindBoldDuotone size={48} color="#9fcfe6" />}
                  windSpeed="15 km/h"
                  isDaytime={hour.isDay}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ForecastHours;
