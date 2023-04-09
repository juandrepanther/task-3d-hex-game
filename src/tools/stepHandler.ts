import { Action, Dispatch } from "@reduxjs/toolkit";
import { ISteps, player } from "../types";
import useCheckIdExists from "../hooks/useCheckIdExists";
import { setStepPlayer1 } from "../store/reducers/player1";
import checkNumberInRange from "../utils/checkNumberInRange";

import { check_red_zone } from "./check_red_zone";
import { check_blue_zone } from "./check_blue_zone";
import { check_yellow_zone } from "./check_yellow_zone";
import { check_white_zone } from "./check_white_zone";
import { check_purple_zone } from "./check_purple_zone";
import { check_orange_zone } from "./check_orange_zone";
import { check_green_zone } from "./check_green_zone";

export const stepHandler = (
  id: number,
  dispatch: Dispatch<Action<any>>,
  turn: player,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  /**
   * identify the player,
   * check if selected id is unique in players store,
   * depending on the selected id, trigger correct zone check
   * @TODO: make this code as reusable functions later on for the player.two
   */

  if (
    turn === player.one &&
    !useCheckIdExists(id, turn, stepsPlayer1, stepsPlayer2)
  ) {
    if (id === 1) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_red_zone(turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (id === 2 || id === 3 || id === 4 || id === 5) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_blue_zone(id, turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (id === 6) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_yellow_zone(turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (id === 31) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_white_zone(turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (id === 32 || id === 33 || id === 34 || id === 35) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_purple_zone(id, turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (id === 36) {
      dispatch(setStepPlayer1({ id: id, connections: 1, player: player.one }));
      check_orange_zone(turn, dispatch, stepsPlayer1, stepsPlayer2);
    }

    if (checkNumberInRange(id)) {
      dispatch(setStepPlayer1({ id: id, connections: 0, player: player.one }));
      check_green_zone(id, turn, dispatch, stepsPlayer1, stepsPlayer2);
    }
  }

  if (
    turn === player.two &&
    !useCheckIdExists(id, turn, stepsPlayer1, stepsPlayer2)
  ) {
  }
};
