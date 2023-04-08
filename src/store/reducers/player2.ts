import { IPlayer_reducer, ISteps } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IPlayer_reducer = {
  steps: [],
};

export const player2Reducer = createSlice({
  name: "player2_reducer",
  initialState,
  reducers: {
    setStepPlayer2: (state, action: PayloadAction<ISteps>) => {
      state.steps.push(action.payload);
    },
  },
});

export const { setStepPlayer2 } = player2Reducer.actions;

export const selectStepsPlayer2 = (state: RootState) => state.player2_reducer;

export default player2Reducer.reducer;
