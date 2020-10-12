import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board.js';
import Header from './components/header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
