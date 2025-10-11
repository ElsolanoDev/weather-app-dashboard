import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Header />
        <MainContent />
        <Footer />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
