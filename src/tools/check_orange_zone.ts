import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateStepsPlayer1 } from "../store/reducers/player1";
import { ISteps, player } from "../types";
import { modifiedCloseHexes } from "../utils/modifiedCloseHexes";
import { updateCurrentStep } from "../utils/updateCurrentStep";

export const check_orange_zone = (
  turn: string,
  dispatch: Dispatch<Action<any>>,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  if (turn === player.one) {
    const foundCloseHexes = stepsPlayer1.filter(
      (step) => step.id === 35 || step.id === 30
    );

    dispatch(updateStepsPlayer1(modifiedCloseHexes(foundCloseHexes)));

    updateCurrentStep(foundCloseHexes.length, dispatch, 36);
  }
  //!TODO for player 2
  if (turn === player.two) {
  }
};
