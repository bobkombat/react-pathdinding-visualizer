import React from "react";
import "./App.css";
import Board from "./components/board.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
