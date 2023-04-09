import { Action, Dispatch } from "@reduxjs/toolkit";
import { updateStepsPlayer1 } from "../store/reducers/player1";
import { ISteps, player } from "./../types";

//red zone means that selected id is 1 and need to check closest hexes with id 2 and 7

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

    const modifiedCloseHexes: ISteps[] = foundCloseHexes.map((closeHex) => {
      return {
        ...closeHex,
        connections: closeHex.connections + 1,
      };
    });

    dispatch(updateStepsPlayer1(modifiedCloseHexes));
  }
  //!TODO for player 2
  if (turn === player.two) {
  }
};
