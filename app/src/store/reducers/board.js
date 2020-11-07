import { SET_BOARD } from "../actionTypes.js";
const initialState = {
  board: [],
  start: {},
  finish: {},
  height: 0,
  width: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_BOARD:
      return {
        ...state,
        board: actions.payload.board,
        finish: actions.payload.finish,
        start: actions.payload.start,
        height: actions.payload.height,
        width: actions.payload.width,
      };
    default:
      return state;
  }
};
