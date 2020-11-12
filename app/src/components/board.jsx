import React, { useEffect, useState } from "react";
import "./board.css";
import useWindowDimensions from "../hooks/windowDimensions";
import { useSelector, useDispatch } from "react-redux";
import { setBoard } from "../store/actions/boardActions.js";

export default function Board() {
  const board = useSelector((store) => store.boardReducers.board);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [start, setStart] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    dispatch(setBoard(height, width));
  }, [height, width, dispatch]);

  function onMouseDown(e) {
    if (e.button !== 0) return;

    setDragging(true);
    setX(e.pageX);
    setY(e.pageY);

    console.log("tesiting");
  }

  function onMouseEnter(e) {
    setStart("entering start");

    console.log(e);
  }

  function onMouseExit(e) {
    setStart("");
  }

  function onMouseUp(e) {
    if (e.button !== 0) return;

    setDragging(false);
    console.log("mouse is up");
  }

  function onMouseMove(e) {
    if (!dragging) return;

    setX(e.pageX);
    setY(e.pageY);

    console.log("foo", x, y);
  }

  return (
    <div id="board" onContextMenu={(e) => e.preventDefault()}>
      {start}
      {x}
      {y}
      {JSON.stringify(dragging)}
      {board.map((x, idx) => {
        return (
          <div id={`row-${idx + 1}`} key={`row-${idx}`} className="row">
            {x.map((z, id) => {
              if (z.start)
                return (
                  <div
                    id={`node-${idx + 1}-${id + 1}`}
                    key={`node-${idx}-${id}`}
                    className="node node-start"
                    onMouseDown={(e) => onMouseDown(e)}
                    onMouseUp={(e) => onMouseUp(e)}
                    onMouseEnter={(e) => onMouseEnter(e)}
                    onMouseLeave={(e) => onMouseExit(e)}
                    style={{ left: x, top: y }}
                    onMouseMove={(e) => onMouseMove(e)}
                  ></div>
                );
              else if (z.finish)
                return (
                  <div
                    id={`node-${idx + 1}-${id + 1}`}
                    key={`node-${idx}-${id}`}
                    className="node node-end"
                  ></div>
                );
              else
                return (
                  <div
                    id={`node-${idx + 1}-${id + 1}`}
                    key={`node-${idx}-${id}`}
                    className="node"
                  ></div>
                );
            })}
          </div>
        );
      })}
    </div>
  );
}
