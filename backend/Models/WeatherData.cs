using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace backend.Models
{
    public class WeatherData
    {
        public Location Location { get; set; }
        public CurrentWeather Current { get; set; }
        public Forecast Forecast { get; set; }
    }

    public class Location
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }

        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime LocalTime { get; set; }
    }

    public class CurrentWeather
    {
        [JsonPropertyName("temp_c")]
        public double TempC { get; set; }
        [JsonPropertyName("temp_f")]
        public double TempF { get; set; }
        [JsonPropertyName("wind_kph")]
        public double WindKph { get; set; }
        public double Humidity { get; set; }
        public double UV { get; set; }
        [JsonPropertyName("pressure_mb")]
        public double PressureMb { get; set; }
        [JsonPropertyName("wind_dir")]
        public string WindDir { get; set; }
        [JsonPropertyName("feelslike_c")]
        public double FeelsLikeC { get; set; }
        public WeatherCondition Condition { get; set; }
    }

    public class Forecast
    {
        public List<ForecastDay> ForecastDay { get; set; }
    }

    public class ForecastDay
    {
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime Date { get; set; }
        public Day Day { get; set; }
        public Astro Astro { get; set; }
        public List<Hour> Hour { get; set; }

    }

    public class Day
    {
        [JsonPropertyName("maxtemp_c")]
        public double MaxTempC { get; set; }
        [JsonPropertyName("mintemp_c")]
        public double MinTempC { get; set; }
        public WeatherCondition Condition { get; set; }
    }

    public class WeatherCondition
    {
        public string Text { get; set; }
        public string Icon { get; set; }
        public int Code { get; set; }
    }

    public class Astro
    {
        public string Sunrise { get; set; }
        public string Sunset { get; set; }
    }

    public class Hour
    {
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime Time { get; set; }
        [JsonPropertyName("temp_c")]
        public double TempC { get; set; }

        [JsonPropertyName("is_day")]
        public int IsDay { get; set; }

        [JsonPropertyName("wind_kph")]
        public double WindKph { get; set; }
        [JsonPropertyName("wind_dir")]
        public string WindDir { get; set; }
        public WeatherCondition Condition { get; set; }
    }


    public class CustomDateTimeConverter : JsonConverter<DateTime>
    {
        private static readonly string[] SupportedFormats = new[] { "yyyy-MM-dd HH:mm", "yyyy-MM-dd" };

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var str = reader.GetString();

            if (string.IsNullOrEmpty(str))
                return default;

            // Try parsing with all supported formats
            if (DateTime.TryParseExact(str, SupportedFormats, CultureInfo.InvariantCulture,
                                       DateTimeStyles.None, out DateTime result))
            {
                return result;
            }

            throw new JsonException($"Unable to parse '{str}' to DateTime.");
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            // Always write in the "yyyy-MM-dd HH:mm" format
            writer.WriteStringValue(value.ToString("yyyy-MM-dd HH:mm"));
        }
    }

}
