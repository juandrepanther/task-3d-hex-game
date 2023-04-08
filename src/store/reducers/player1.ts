import { IPlayer_reducer, ISteps } from "./../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IPlayer_reducer = {
  steps: [],
};

export const player1Reducer = createSlice({
  name: "player1_reducer",
  initialState,
  reducers: {
    setStepPlayer1: (state, action: PayloadAction<ISteps>) => {
      state.steps.push(action.payload);
    },
  },
});

export const { setStepPlayer1 } = player1Reducer.actions;

export const selectStepsPlayer1 = (state: RootState) => state.player1_reducer;

export default player1Reducer.reducer;
