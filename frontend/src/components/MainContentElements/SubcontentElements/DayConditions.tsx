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
          <div>{weather?.humidity}%</div>
          <div>Humidity</div>
        </div>
        <div className="col">
          <WindBoldDuotone size={32} color="#9fcfe6" />
          <div>{weather?.windKph} mph</div>
          <div>Wind Speed</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SpedometerMiddleBoldDuotone size={32} color="#9fcfe6" />
          <div>{weather?.pressure} mb</div>
          <div>Pressure</div>
        </div>
        <div className="col">
          <StarBoldDuotone size={32} color="#9fcfe6" />
          <div>{weather?.uv}</div>
          <div>UV</div>
        </div>
      </div>
    </>
  );
}
export default DayConditions;
