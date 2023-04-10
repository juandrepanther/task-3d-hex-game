import { player } from "./../types";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateCurrentStepPlayer1 } from "../store/reducers/player1";
import { updateCurrentStepPlayer2 } from "../store/reducers/player2";

export const updateCurrentStep = (
  foundCloseHexesLength: number,
  dispatch: Dispatch<Action<any>>,
  id: number,
  turn: string
) => {
  if (turn === player.one) {
    if (foundCloseHexesLength) {
      dispatch(
        updateCurrentStepPlayer1({
          id: id,
          connectedSteps: foundCloseHexesLength,
        })
      );
    }
  }

  if (turn === player.two) {
    if (foundCloseHexesLength) {
      dispatch(
        updateCurrentStepPlayer2({
          id: id,
          connectedSteps: foundCloseHexesLength,
        })
      );
    }
  }
};
