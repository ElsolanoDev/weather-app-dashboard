using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;
        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string location)
        {
            if (string.IsNullOrEmpty(location))
                return BadRequest("Location is required.");

            try
            {
                var apiData = await _weatherService.GetWeatherAsync(location);
                #region Extract Forecast Hours (Next 5 Hours)
                var localTimeParts = apiData.Location.LocalTime.ToString("yyyy-MM-dd HH:mm").Split(' ');

                var localDate = apiData.Location.LocalTime.Date;
                var localHour = apiData.Location.LocalTime.Hour;

                var forecastDay = apiData.Forecast.ForecastDay
                    .FirstOrDefault(d => d.Date.Date == localDate);

                List<ForecastHours> forecastHours = new();

                if (forecastDay != null && forecastDay.Hour != null)
                {
                    forecastHours = forecastDay.Hour
                        .Where(h =>
                        {
                            var hourDateTime = h.Time;
                            return hourDateTime.Date == localDate &&
                                   hourDateTime.Hour > localHour &&
                                   hourDateTime.Hour <= localHour + 5;
                        })
                        .Select(h => new ForecastHours
                        {
                            Time = h.Time.ToString("HH:mm"),
                            TempC = h.TempC,
                            ConditionText = h.Condition.Text,
                            ConditionIcon = h.Condition.Icon,
                            WindKph = h.WindKph,
                            WindDir = h.WindDir,
                            isDay = h.IsDay == 1
                        })
                        .ToList();
                }
                #endregion
                // Use forecastHours in your DTO
                var dto = new WeatherDto
                {
                    LocationName = apiData.Location.Name,
                    Country = apiData.Location.Country,
                    Date = apiData.Location.LocalTime.ToString("MMM d, ddd", CultureInfo.InvariantCulture),
                    Hour = localTimeParts[1],
                    TempC = apiData.Current.TempC,
                    TempF = apiData.Current.TempF,
                    FeelsLikeC = apiData.Current.FeelsLikeC,
                    WindKph = apiData.Current.WindKph,
                    Humidity = apiData.Current.Humidity,
                    UV = apiData.Current.UV,
                    Pressure = apiData.Current.PressureMb,
                    WindDir = apiData.Current.WindDir,
                    ConditionText = apiData.Current.Condition.Text,
                    ConditionIcon = apiData.Current.Condition.Icon,
                    Sunrise = apiData.Forecast.ForecastDay[0].Astro.Sunrise,
                    Sunset = apiData.Forecast.ForecastDay[0].Astro.Sunset,
                    ForecastHours = forecastHours,
                    ForecastDays = apiData.Forecast.ForecastDay.Select(f => new ForecastDayDto
                    {
                        Date = f.Date.ToString("MMM d, ddd", CultureInfo.InvariantCulture),
                        MaxTempC = f.Day.MaxTempC,
                        MinTempC = f.Day.MinTempC,
                        ConditionText = f.Day.Condition.Text,
                        ConditionIcon = f.Day.Condition.Icon
                    }).ToList(),
                    
                };

                return Ok(dto);
            }
            catch
            {
                return StatusCode(500, "Failed to fetch weather data.");
            }
        }
    }
}