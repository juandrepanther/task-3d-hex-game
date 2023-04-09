import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateCurrentStepPlayer1 } from "../store/reducers/player1";

export const updateCurrentStep = (
  foundCloseHexesLength: number,
  dispatch: Dispatch<Action<any>>,
  id: number
) => {
  if (foundCloseHexesLength) {
    dispatch(
      updateCurrentStepPlayer1({
        id: id,
        connectedSteps: foundCloseHexesLength,
      })
    );
  }
};
