import React from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  function startVisualize() {
    dispatch();
  }

  return (
    <>
      <h1>Hello Worlds</h1>
      <button onClick={() => startVisualize}>Visualize A*</button>
    </>
  );
}
