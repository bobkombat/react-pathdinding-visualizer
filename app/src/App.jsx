import React from "react";
import "./App.css";
import Board from "./components/board.jsx";
import Header from "./components/header.jsx";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;
