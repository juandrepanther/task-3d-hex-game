import { updateCurrentStep } from "./../utils/updateCurrentStep";
import { Action, Dispatch } from "@reduxjs/toolkit";
import {
  updateCurrentStepPlayer1,
  updateStepsPlayer1,
} from "../store/reducers/player1";
import { modifiedCloseHexes } from "../utils/modifiedCloseHexes";
import { ISteps, player } from "../types";

export const check_blue_zone = (
  id: number,
  turn: string,
  dispatch: Dispatch<Action<any>>,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  if (turn === player.one) {
    const foundCloseHexes = stepsPlayer1.filter(
      (step) =>
        step.id === id - 1 ||
        step.id === id + 1 ||
        step.id === id + 5 ||
        step.id === id + 6
    );

    dispatch(updateStepsPlayer1(modifiedCloseHexes(foundCloseHexes)));

    updateCurrentStep(foundCloseHexes.length, dispatch, id);
  }
  //!TODO for player 2
  if (turn === player.two) {
  }
};
