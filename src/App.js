import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://alina-ananyeva.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alina Ananyeva
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/alinaland/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
