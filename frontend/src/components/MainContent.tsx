import ForecastDays from "./MainContentElements/ForecastDays";
import ForecastHours from "./MainContentElements/ForecastHours";
import PlaceInfo from "./MainContentElements/PlaceInfo";
import DayInfo from "./MainContentElements/DayInfo";
import { useWeather } from "../context/WeatherContext";
import ContentUnavailable from "./MainContentElements/SubcontentElements/ContentUnavailable";

function MainContent() {
  const { weather } = useWeather();

  if (!weather) {
    return (
      <main className="container">
        <div className="container text-center">
          <ContentUnavailable message="No weather data available" />
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-2 g-3 align-items-stretch">
          <div className="col d-flex">{<PlaceInfo />}</div>
          <div className="col d-flex">{<DayInfo />}</div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-3 align-items-stretch">
          <div className="col d-flex">{<ForecastDays />}</div>
          <div className="col d-flex">{<ForecastHours />}</div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
