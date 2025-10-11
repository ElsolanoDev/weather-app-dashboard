public class WeatherDto
{
    public string LocationName { get; set; }
    public string Country { get; set; }
    public string Date { get; set; }
    public string Hour { get; set; }
    public double TempC { get; set; }
    public double TempF { get; set; }
    public double FeelsLikeC { get; set; }
    public double WindKph { get; set; }
    public double Humidity { get; set; }
    public double UV { get; set; }
    public double Pressure { get; set; }
    public string WindDir { get; set; }
    public string ConditionText { get; set; }
    public string ConditionIcon { get; set; }
    public string Sunrise { get; set; }
    public string Sunset { get; set; }
    public List<ForecastDayDto> ForecastDays { get; set; }
    public List<ForecastHours> ForecastHours { get; set; }
}

public class ForecastDayDto
{
    public string Date { get; set; }
    public double MaxTempC { get; set; }
    public double MinTempC { get; set; }
    public string ConditionText { get; set; }
    public string ConditionIcon { get; set; }
}

public class ForecastHours
{
    public string Time { get; set; }
    public double TempC { get; set; }
    public string ConditionText { get; set; }
    public string ConditionIcon { get; set; }
    public double WindKph { get; set; }
    public string WindDir { get; set; }
    public bool isDay { get; set; }
}