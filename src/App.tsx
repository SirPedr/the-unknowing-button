import "./App.css";
import { useClickConsequence } from "./hooks/useClickConsequence";

function App() {
  const { consequence, getConsequence, error } = useClickConsequence();

  return (
    <main className="app">
      <h1 className="app__title">The Unknowing Button</h1>
      <h2 className="app__subtitle">An unknown consequence on every click.</h2>

      <button className="app__button" onClick={getConsequence}>
        Click me
      </button>

      {consequence && !error && <p className="app__message">{consequence}</p>}

      {error && (
        <p className="app__message app__message--error">
          Error: The Consequence Engine has temporarily run out of 'Huh?'
          moments and needs a quick spiritual reboot (which, coincidentally,
          involves you clicking the button again)
        </p>
      )}

      <footer className="app__footer">
        Made with love by{" "}
        <a
          href="https://github.com/SirPedr"
          target="_blank"
          className="app__link"
        >
          SirPedr
        </a>
      </footer>
    </main>
  );
}

export default App;
