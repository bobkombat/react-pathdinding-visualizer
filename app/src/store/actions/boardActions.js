import { SET_BOARD } from "../actionTypes.js";
import { createBoard } from "./helper";
import AStarAlgorithm from "../../algorithm/astar.js";

export function setBoard(height, width) {
  return (dispatch, state) => {
    const tempBoard = createBoard(height, width, { x: 0, y: 0 }, { x: width - 1, y: height - 1 });

    dispatch({
      type: SET_BOARD,
      payload: {
        board: tempBoard,
        start: { x: 0, y: 0 },
        finish: { x: width - 1, y: height - 1 },
        height: height,
        width: width,
      },
    });
  };
}

export function startSearch() {
  return (dispatch, state) => {
    const currentBoard = state().boardReducers;

    console.log(
      AStarAlgorithm(
        currentBoard.board,
        currentBoard["start"]["y"],
        currentBoard["start"]["x"],
        currentBoard["finish"]["y"],
        currentBoard["finish"]["x"]
      )
    );
  };
}
