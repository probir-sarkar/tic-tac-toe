import { useState, useContext } from "react";
import { PlayersContext } from "./contexts/players.context";
import "./App.scss";
import Game from "./components/Game/Game.component";
import Results from "./components/Results/Results.component";

function App() {
  return (
    <div className="App">
      {/* heading for tic-tac-toe game */}
      <h1>Tic Tac Toe</h1>
      <Game />
      <Results />
    </div>
  );
}

export default App;
