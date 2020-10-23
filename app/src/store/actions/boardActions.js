import { SET_BOARD } from "../actionTypes.js";
import { createBoard } from "./helper";

export function setBoard(height, width) {
  return (dispatch, state) => {
    const tempBoard = createBoard(
      height,
      width,
      { x: 0, y: 0 },
      { x: width - 1, y: height - 1 }
    );

    dispatch({
      type: SET_BOARD,
      payload: {
        board: tempBoard,
      },
    });
  };
}
