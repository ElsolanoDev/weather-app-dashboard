import { useState } from "react";
import { useWeather } from "../../../context/WeatherContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { refreshWeather } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    console.log("Searching for:", query);
    setQuery("");
    refreshWeather(query);
  };
  return (
    <div
      className="position-relative flex-grow-1 mx-3"
      style={{ minWidth: "250px", maxWidth: "600px", flexBasis: "50%" }}
    >
      <form
        onSubmit={handleSubmit}
        className="input-group rounded-pill overflow-hidden"
      >
        <span className="input-group-text bg-transparent border-0">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 shadow-none bg-transparent"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ outline: "none" }}
        />
      </form>
    </div>
  );
}

export default SearchBar;
