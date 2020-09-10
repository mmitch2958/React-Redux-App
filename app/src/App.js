import React from "react";
import "./App.css";

import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Your Chuck Norris Jokes on Command</h2>
      </header>

      <Quotes />
    </div>
  );
}

export default App;