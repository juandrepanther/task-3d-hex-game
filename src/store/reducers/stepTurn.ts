import { IStepTurn, player } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IStepTurn = {
  turn: player.one,
};

export const stepTurn = createSlice({
  name: "stepTurn_reducer",
  initialState,
  reducers: {
    setStepTurn: (state) => {
      state.turn = state.turn === player.one ? player.two : player.one;
    },
  },
});

export const { setStepTurn } = stepTurn.actions;

export const selectStepTurn = (state: RootState) => state.stepTurn_reducer;

export default stepTurn.reducer;
