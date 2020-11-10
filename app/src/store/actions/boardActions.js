import { SET_BOARD } from "../actionTypes.js";
import { createBoard } from "./helper";
import AStarAlgorithm from "../../algorithm/astar.js";

export function setBoard(height, width) {
  return (dispatch, state) => {
    const tempBoard = createBoard(height, width, { x: 0, y: 0 }, { x: width - 5, y: height - 5 });

    dispatch({
      type: SET_BOARD,
      payload: {
        board: tempBoard,
        start: { x: 0, y: 0 },
        finish: { x: width - 5, y: height - 5 },
        height: height,
        width: width,
      },
    });
  };
}

export function startSearch() {
  return (dispatch, state) => {
    const currentBoard = state().boardReducers;
    const time = Date.now();

    const tempBoard = createBoard(
      currentBoard.height,
      currentBoard.width,
      { x: 0, y: 0 },
      { x: currentBoard.width - 5, y: currentBoard.height - 5 }
    );
    dispatch({
      type: SET_BOARD,
      payload: {
        board: tempBoard,
        start: { x: 0, y: 0 },
        finish: { x: currentBoard.width - 5, y: currentBoard.height - 5 },
        height: currentBoard.height,
        width: currentBoard.width,
      },
    });

    const path = AStarAlgorithm(
      currentBoard.board,
      currentBoard["start"]["y"],
      currentBoard["start"]["x"],
      currentBoard["finish"]["y"],
      currentBoard["finish"]["x"],
      "MANHATTAN"
    );
    path.pop();
    path.shift();

    for (let i of path) {
      const element = document.createElement("div");

      element.classList.add("path");
      document.getElementById(`node-${i["y"] + 1}-${i["x"] + 1}`).appendChild(element);
    }

    console.log(Date.now() - time);
    console.log(path);
  };
}
