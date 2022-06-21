import logo from "./logo.svg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/esraayaz/"
          target="_blank"
          className="esra"
          rel="noreferrer"
        >
          Esra Ayaz
        </a>
        and is
        <a
          href="https://github.com/esraayaz/dictionary-app"
          target="_blank"
          className="ayaz
        "
          rel="noreferrer"
        >
          open - sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
