import { combineReducers } from "@reduxjs/toolkit";
import player2Reducer from "./reducers/player2";
import player1Reducer from "./reducers/player1";
import stepTurn from "./reducers/stepTurn";

export const rootReducer = combineReducers({
  player1_reducer: player1Reducer,
  player2_reducer: player2Reducer,
  stepTurn_reducer: stepTurn,
});
