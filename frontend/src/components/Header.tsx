import { useTheme } from "../context/ThemeContext";
import { TargetLineDuotone } from "solar-icon-set";
import SearchBar from "./MainContentElements/SubcontentElements/SearchBar";
import { useWeather } from "../context/WeatherContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const { refreshWeather } = useWeather();

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        // Example: call your refreshWeather with lat/lon
        refreshWeather(`${latitude},${longitude}`);
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <header className="p-3">
      <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
        {/* Theme switch */}
        <div className="d-flex flex-column align-items-center">
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              checked={darkMode}
              onChange={toggleTheme}
              id="themeSwitch"
            />
          </div>
          <label htmlFor="themeSwitch" className="form-check-label mt-1 small">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </label>
        </div>

        {/* Search bar */}
        <SearchBar />
        {/* Button */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleGetCurrentLocation}
        >
          <TargetLineDuotone className="me-2" /> Current Location
        </button>
      </div>
    </header>
  );
}
