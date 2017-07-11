import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function questionReducer(state = initialState.questions, action) {
  switch (action.type) {
    case types.ADD_QUESTION:
      return [
        ...state,
        Object.assign({}, action.question)
      ];

    default:
      return state;
  }
}
