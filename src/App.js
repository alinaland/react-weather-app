import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project is coded by{" "}
          <a href="https://alina-ananyeva.netlify.app">Alina Ananyeva</a> and is{" "}
          <a
            href="https://github.com/alinaland/react-weather-app"
            targte="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
