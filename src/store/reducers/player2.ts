import { IPlayer_reducer, ISteps, IUpdateCurrentStepPlayer } from "../../types";
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

    updateCurrentStepPlayer2: (
      state,
      action: PayloadAction<IUpdateCurrentStepPlayer>
    ) => {
      const { id, connectedSteps } = action.payload;

      const currentStepIndex = state.steps.findIndex((step) => step.id === id);
      if (currentStepIndex !== -1) {
        state.steps[currentStepIndex].connections += connectedSteps;
      }
    },

    updateStepsPlayer2: (state, action: PayloadAction<ISteps[]>) => {
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

export const { setStepPlayer2, updateStepsPlayer2, updateCurrentStepPlayer2 } =
  player2Reducer.actions;

export const selectStepsPlayer2 = (state: RootState) => state.player2_reducer;

export default player2Reducer.reducer;
