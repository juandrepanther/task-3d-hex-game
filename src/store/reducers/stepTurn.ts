import { IPlayer_reducer, ISteps, IStepTurn, player } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IStepTurn = {
  turn: player.none,
};

export const stepTurn = createSlice({
  name: "stepTurn_reducer",
  initialState,
  reducers: {
    setStepTurn: (state, action: PayloadAction<player>) => {
      state.turn = action.payload;
    },
  },
});

export const { setStepTurn } = stepTurn.actions;

export const selectStepTurn = (state: RootState) => state.stepTurn_reducer;

export default stepTurn.reducer;
