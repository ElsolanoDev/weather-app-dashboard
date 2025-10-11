import type { WeatherDto } from "../types/Weather";

export async function fetchWeather(location: string) {
  const res = await fetch(`https://localhost:7269/api/weather?location=${location}`);
  console.log(res);
  if (!res.ok) 
    throw new Error("Failed to fetch weather");
  return res.json() as Promise<WeatherDto>;
}