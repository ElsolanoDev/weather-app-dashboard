import {
  SunriseBoldDuotone,
  SunsetBoldDuotone,
  FogBoldDuotone,
  CloudBoltBoldDuotone,
  Sun2BoldDuotone,
  CloudSnowfallBoldDuotone,
  CloudRainBoldDuotone,
} from "solar-icon-set";
import DayConditions from "./SubcontentElements/DayConditions";
import { useWeather } from "../../context/WeatherContext";
import { useTheme } from "../../context/ThemeContext";

function DayInfo() {
  const { weather } = useWeather();
  const { darkMode } = useTheme();
  return (
    <>
      <div className="card main-card flex-fill">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="card-fancy-text fs-1">{weather?.tempC}°C</div>
              <div className="card-fancy-text fs-5 mb-3">
                Feels like: {weather?.feelsLikeC}°C
              </div>
              <div className="row">
                <div className="col">
                  <SunriseBoldDuotone size={32} color="#9fcfe6" />
                  <div className="card-text">Sunrise</div>
                </div>
                <div className="col  d-flex align-items-end">
                  <div className="card-text">{weather?.sunrise}</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <SunsetBoldDuotone size={32} color="#9fcfe6" />
                  <div className="card-text">Sunset</div>
                </div>
                <div className="col d-flex align-items-end">
                  <div className="card-text">{weather?.sunset}</div>
                </div>
              </div>
            </div>
            <div className="col">
              {weather?.conditionIcon &&
                (weather?.conditionText.toLocaleLowerCase().includes("rain") ? (
                  <CloudRainBoldDuotone size={128} color="#9fcfe6" />
                ) : weather?.conditionText
                    .toLocaleLowerCase()
                    .includes("snow") ||
                  weather?.conditionText
                    .toLocaleLowerCase()
                    .includes("blizzard") ? (
                  <CloudSnowfallBoldDuotone size={12} color="#9fcfe6" />
                ) : weather?.conditionText
                    .toLocaleLowerCase()
                    .includes("sun") ||
                  weather?.conditionText
                    .toLocaleLowerCase()
                    .includes("clear") ? (
                  <Sun2BoldDuotone
                    size={128}
                    color={darkMode ? "#f9d74e" : "#d2a93875"}
                  />
                ) : weather?.conditionText
                    .toLocaleLowerCase()
                    .includes("storm") ? (
                  <CloudBoltBoldDuotone size={128} color="#9fcfe6" />
                ) : (
                  <FogBoldDuotone size={128} color="#9fcfe6" />
                ))}
              <div className="card-text fs-2"> {weather?.conditionText} </div>
            </div>
            <div className="col">
              <DayConditions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DayInfo;
