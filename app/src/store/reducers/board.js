import { SET_BOARD } from "../actionTypes.js";
const initialState = {
  board: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_BOARD:
      return { ...state, board: actions.payload.board };
    default:
      return state;
  }
};
