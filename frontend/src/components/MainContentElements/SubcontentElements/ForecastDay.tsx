interface DayForecastProps {
  day: string;
  temperature: string;
  icon: React.ReactNode;
}

function ForecastDay({ day, temperature, icon: Icon }: DayForecastProps) {
  return (
    <>
      <div className="row">
        <div className="col">{Icon}</div>
        <div className="col">
          <p className="card-text">{temperature}</p>
        </div>
        <div className="col">
          <p className="card-text fs-5">{day}</p>
        </div>
      </div>
    </>
  );
}

export default ForecastDay;
