import {
  IPlayer_reducer,
  ISteps,
  IUpdateCurrentStepPlayer1,
} from "./../../types";
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

    updateCurrentStepPlayer1: (
      state,
      action: PayloadAction<IUpdateCurrentStepPlayer1>
    ) => {
      const { id, connectedSteps } = action.payload;

      const currentStepIndex = state.steps.findIndex((step) => step.id === id);
      if (currentStepIndex !== -1) {
        state.steps[currentStepIndex].connections += connectedSteps;
      }
    },

    updateStepsPlayer1: (state, action: PayloadAction<ISteps[]>) => {
      const receivedModifiedSteps = action.payload;

      const replacingSteps = state.steps.map((step) => {
        const updatedSteps = receivedModifiedSteps.find(
          (modifiedStep) => modifiedStep.id === step.id
        );

        if (updatedSteps) {
          return updatedSteps;
        }
        return step;
      });

      state.steps = replacingSteps;
    },
  },
});

export const { setStepPlayer1, updateStepsPlayer1, updateCurrentStepPlayer1 } =
  player1Reducer.actions;

export const selectStepsPlayer1 = (state: RootState) => state.player1_reducer;

export default player1Reducer.reducer;
