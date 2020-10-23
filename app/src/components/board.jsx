import React, { useEffect } from "react";
import "./board.css";
import useWindowDimensions from "../hooks/windowDimensions";
import { useSelector, useDispatch } from "react-redux";
import { setBoard } from "../store/actions/boardActions.js";

export default function Board() {
  const board = useSelector((store) => store.boardReducers.board);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    dispatch(setBoard(height, width));
  }, [height, width, dispatch]);

  return (
    <div id="board">
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
