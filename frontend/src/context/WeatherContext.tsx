import { createContext, useContext, useEffect, useState } from "react";
import type { WeatherDto } from "../types/Weather";
import { fetchWeather } from "../services/WeatherService";

interface WeatherContextType {
  weather: WeatherDto | null;
  loading: boolean;
  error: string | null;
  refreshWeather: (location: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: false,
  error: null,
  refreshWeather: async () => {},
});

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weather, setWeather] = useState<WeatherDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshWeather = async (location: string) => {
    try {
      console.log("Fetching weather for:", location);
      setLoading(true);
      setError(null);
      const data = await fetchWeather(location);
      console.log(data);
      setWeather(data);
    } catch (err) {
      setError("Failed to load weather data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch default location on mount
  useEffect(() => {
    refreshWeather("Miami");
  }, []);

  return (
    <WeatherContext.Provider
      value={{ weather, loading, error, refreshWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
