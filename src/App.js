import React from "react";
import Game from "./components/Game"; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <Game /> {/* Ensure Game component is properly implemented */}
    </div>
  );
}

export default App;
