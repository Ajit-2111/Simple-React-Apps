import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter</h1>

      <span id="value">{count}</span>

      <section className="button-container">
        <button id="increase" onClick={increase}>
          Increase
        </button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
        <button id="decrease" onClick={decrease}>
          Decrease
        </button>
      </section>
    </div>
  );
}

export default App;
