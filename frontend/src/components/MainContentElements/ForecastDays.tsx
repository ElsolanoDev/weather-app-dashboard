import ForecastDay from "./SubcontentElements/ForecastDay";
import {
  CloudBoltBoldDuotone,
  CloudRainBoldDuotone,
  Sun2BoldDuotone,
  CloudSnowfallBoldDuotone,
  FogBoldDuotone,
} from "solar-icon-set";

import { useWeather } from "../../context/WeatherContext";

function ForecastDays() {
  const { weather } = useWeather();

  return (
    <>
      <div className="card main-card flex-fill">
        <div className="card-body">
          <h5 className="card-title">5 Day Forecast:</h5>
          {weather?.forecastDays.map((day) => (
            <ForecastDay
              key={day.date}
              day={day.date}
              temperature={`${day.maxTempC}°C`}
              icon={
                /*day.conditionIcon*/ day.conditionText.includes("rain") ? (
                  <CloudRainBoldDuotone size={48} color="#9fcfe6" />
                ) : day.conditionText.includes("snow") ||
                  day.conditionText.includes("blizzard") ? (
                  <CloudSnowfallBoldDuotone size={48} color="#9fcfe6" />
                ) : day.conditionText.includes("sun") ? (
                  <Sun2BoldDuotone size={48} color="#9fcfe6" />
                ) : day.conditionText.includes("storm") ? (
                  <CloudBoltBoldDuotone size={48} color="#9fcfe6" />
                ) : (
                  <FogBoldDuotone size={48} color="#9fcfe6" />
                )
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ForecastDays;
