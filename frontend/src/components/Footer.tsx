function Footer() {
  return (
    <footer className="footer text-center py-3 mt-4 border-top small text-muted">
      <div>Weather Dashboard © 2025 by Elias Solano</div>
      <div>
        Design inspired by
        <a
          href="https://www.figma.com/design/LADJXj2ShIBYIJCto11lFm/Weather-Dashboard--Community-"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Figma Community
        </a>
      </div>
      <div>
        Data from{" "}
        <a href="https://www.weatherapi.com/" target="_blank">
          WeatherAPI.com
        </a>
      </div>
      <div>
        <a href="https://github.com/elsolanoDev" target="_blank">
          GitHub
        </a>{" "}
        ·<a href="mailto:elsolanog3@gmail.com">Contact</a>
      </div>
    </footer>
  );
}
export default Footer;
