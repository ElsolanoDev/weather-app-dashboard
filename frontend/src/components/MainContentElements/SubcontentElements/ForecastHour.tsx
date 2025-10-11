interface ForecastHourProps {
  hour: string;
  weatherIcon: React.ReactNode;
  temperature: string;
  windIcon: React.ReactNode;
  windSpeed: string;
  isDaytime: boolean;
}

function ForecastHour({
  hour,
  weatherIcon: WeatherIcon,
  temperature,
  windIcon: WindIcon,
  windSpeed,
  isDaytime,
}: ForecastHourProps) {
  return (
    <div className="card">
      <div className={isDaytime ? "card-forecast day" : "card-forecast night"}>
        <div className="card-text">{hour}</div>
        {WeatherIcon}
        <div className="card-text">{temperature}</div>
        {WindIcon}
        <div className="card-text">{windSpeed}</div>
      </div>
    </div>
  );
}
export default ForecastHour;
