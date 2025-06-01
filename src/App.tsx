import "./App.css";
import { useClickConsequence } from "./hooks/useClickConsequence";

function App() {
  const { consequence, getConsequence, error } = useClickConsequence();

  return (
    <main>
      <h1>The Unknowing Button</h1>
      <h2>An unknown consequence on every click.</h2>

      <button onClick={getConsequence}>Click me</button>
      {consequence && <p>{consequence}</p>}
      {error && (
        <p>
          Error: The Consequence Engine has temporarily run out of 'Huh?'
          moments and needs a quick spiritual reboot (which, coincidentally,
          involves you clicking the button again)
        </p>
      )}
    </main>
  );
}

export default App;
