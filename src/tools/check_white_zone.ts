import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateStepsPlayer1 } from "../store/reducers/player1";
import { ISteps, player } from "../types";
import { modifiedCloseHexes } from "../utils/modifiedCloseHexes";
import { updateCurrentStep } from "../utils/updateCurrentStep";

//red zone means that selected id is 1 and need to check closest hexes with id 2 and 7

export const check_white_zone = (
  turn: string,
  dispatch: Dispatch<Action<any>>,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  if (turn === player.one) {
    const foundCloseHexes = stepsPlayer1.filter(
      (step) => step.id === 25 || step.id === 26 || step.id === 32
    );

    dispatch(updateStepsPlayer1(modifiedCloseHexes(foundCloseHexes)));

    updateCurrentStep(foundCloseHexes.length, dispatch, 31);
  }
  //!TODO for player 2
  if (turn === player.two) {
  }
};
