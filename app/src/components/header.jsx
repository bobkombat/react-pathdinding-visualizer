import React from "react";
import { useDispatch } from "react-redux";
import { startSearch } from "../store/actions/boardActions";

export default function Header() {
  const dispatch = useDispatch();

  function startVisualize() {
    dispatch(startSearch());
  }

  return (
    <>
      <h1>Hello Worlds</h1>
      <button onClick={startVisualize}>Visualize A*</button>
    </>
  );
}
