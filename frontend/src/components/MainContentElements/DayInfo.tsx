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

function DayInfo() {
  const { weather } = useWeather();
  return (
    <>
      <div className="card main-card flex-fill">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-fancy-text big">{weather?.tempC}°C</h5>
              <div className="card-fancy-text small">
                Feels like: {weather?.feelsLikeC}°C
              </div>
              <div className="row">
                <div className="col">
                  <SunriseBoldDuotone size={32} color="#9fcfe6" />
                  <div>Sunrise</div>
                </div>
                <div className="col">
                  <div>{weather?.sunrise}</div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <SunsetBoldDuotone size={32} color="#9fcfe6" />
                  <div>Sunset</div>
                </div>
                <div className="col">
                  <div>{weather?.sunset}</div>
                </div>
              </div>
            </div>
            <div className="col">
              {weather?.conditionIcon &&
                (weather?.conditionText.includes("rain") ? (
                  <CloudRainBoldDuotone size={128} color="#9fcfe6" />
                ) : weather?.conditionText.includes("snow") ||
                  weather?.conditionText.includes("blizzard") ? (
                  <CloudSnowfallBoldDuotone size={12} color="#9fcfe6" />
                ) : weather?.conditionText.includes("sun") ? (
                  <Sun2BoldDuotone size={128} color="#9fcfe6" />
                ) : weather?.conditionText.includes("storm") ? (
                  <CloudBoltBoldDuotone size={128} color="#9fcfe6" />
                ) : (
                  <FogBoldDuotone size={128} color="#9fcfe6" />
                ))}
              <div> {weather?.conditionText} </div>
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
