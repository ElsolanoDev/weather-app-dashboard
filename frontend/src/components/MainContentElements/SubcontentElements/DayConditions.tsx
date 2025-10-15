import {
  WaterBoldDuotone,
  WindBoldDuotone,
  SpedometerMiddleBoldDuotone,
  StarBoldDuotone,
} from "solar-icon-set";

import { useWeather } from "../../../context/WeatherContext";

function DayConditions() {
  const { weather } = useWeather();
  return (
    <>
      <div className="row">
        <div className="col">
          <WaterBoldDuotone size={32} color="#9fcfe6" />
          <div className="card-text">{weather?.humidity}%</div>
          <div className="card-text">Humidity</div>
        </div>
        <div className="col">
          <WindBoldDuotone size={32} color="#9fcfe6" />
          <div className="card-text">{weather?.windKph} mph</div>
          <div className="card-text">Wind Speed</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SpedometerMiddleBoldDuotone size={32} color="#9fcfe6" />
          <div className="card-text">{weather?.pressure} mb</div>
          <div className="card-text">Pressure</div>
        </div>
        <div className="col">
          <StarBoldDuotone size={32} color="#9fcfe6" />
          <div className="card-text">{weather?.uv}</div>
          <div className="card-text">UV</div>
        </div>
      </div>
    </>
  );
}
export default DayConditions;
