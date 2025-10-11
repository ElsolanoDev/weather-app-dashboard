export interface ForecastDayDto {
  date: string;
  maxTempC: number;
  minTempC: number;
  conditionText: string;
  conditionIcon: string;
}

export interface ForecastHourDto {
  time: string;
  tempC: number;
  conditionText: string;
  conditionIcon: string;
  windKph: number;
  windDir: string;
  isDay: boolean;
}

export interface WeatherDto {
  locationName: string;
  country: string;
  hour: string;
  date: string;
  tempC: number;
  tempF: number;
  feelsLikeC: number;
  windKph: number;
  humidity: number;
  uv: number;
  pressure: number;
  windDir: string;
  conditionText: string;
  conditionIcon: string;
  sunrise: string;
  sunset: string;
  forecastDays: ForecastDayDto[];
  forecastHours: ForecastHourDto[];
}
