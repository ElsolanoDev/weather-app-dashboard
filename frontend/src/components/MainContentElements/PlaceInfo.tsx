import { useWeather } from "../../context/WeatherContext";

function PlaceInfo() {
  const { weather } = useWeather();
  return (
    <>
      <div className="card main-card flex-fill">
        <div className="card-body">
          <h4 className="card-title">
            {weather?.locationName} ({weather?.country})
          </h4>
          <div className="card-middle-text">{weather?.hour}</div>
          <div className="card-bottom-text">{weather?.date}</div>
        </div>
      </div>
    </>
  );
}
export default PlaceInfo;
