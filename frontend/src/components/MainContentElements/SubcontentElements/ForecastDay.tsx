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
          <h5 className="card-text">{day}</h5>
        </div>
      </div>
    </>
  );
}

export default ForecastDay;
