using backend.Models;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using System.Net.NetworkInformation;
using System.Text.Json;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IWeatherService
    {
        Task<WeatherData> GetWeatherAsync(string location);
    }

    public class WeatherService : IWeatherService
    {
        private readonly HttpClient _http;
        private readonly IMemoryCache _cache;
        private readonly string _apiKey;
        private readonly string _baseUrl;

        public WeatherService(HttpClient http, IMemoryCache cache, IOptions<WeatherApiOptions> options)
        {
            _http = http;
            _cache = cache;
            _apiKey = options.Value.ApiKey;
            _baseUrl = options.Value.BaseUrl;
        }

        public async Task<WeatherData> GetWeatherAsync(string location)
        {
            if (_cache.TryGetValue(location, out WeatherData cached))
                return cached;

            var url = $"{_baseUrl}?key={_apiKey}&q={location}&days=5&aqi=no&alerts=no";
            var response = await _http.GetStringAsync(url);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            var data = JsonSerializer.Deserialize<WeatherData>(response, options);

            _cache.Set(location, data, TimeSpan.FromMinutes(10));
            return data;
        }
    }

    public class WeatherApiOptions
    {
        public string ApiKey { get; set; }
        public string BaseUrl { get; set; }
    }

}