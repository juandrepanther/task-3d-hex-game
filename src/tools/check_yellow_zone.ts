import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateStepsPlayer1 } from "../store/reducers/player1";
import { ISteps, player } from "../types";
import { modifiedCloseHexes } from "../utils/modifiedCloseHexes";
import { updateCurrentStep } from "../utils/updateCurrentStep";

//red zone means that selected id is 1 and need to check closest hexes with id 2 and 7

export const check_yellow_zone = (
  turn: string,
  dispatch: Dispatch<Action<any>>,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  if (turn === player.one) {
    const foundCloseHexes = stepsPlayer1.filter(
      (step) => step.id === 5 || step.id === 11 || step.id === 12
    );

    dispatch(updateStepsPlayer1(modifiedCloseHexes(foundCloseHexes)));

    updateCurrentStep(foundCloseHexes.length, dispatch, 6);
  }
  //!TODO for player 2
  if (turn === player.two) {
  }
};
