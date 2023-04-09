import { checkStepsWinner } from "./../utils/checkStepsWinner";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { player } from "../types";
import { toast } from "react-toastify";

function WinnerCheck() {
  const { turn } = useSelector((state: RootState) => state.stepTurn_reducer);
  const stepsPlayer1 = useSelector(
    (state: RootState) => state.player1_reducer.steps
  );
  const stepsPlayer2 = useSelector(
    (state: RootState) => state.player2_reducer.steps
  );

  // winner check

  useEffect(() => {
    if (
      turn === player.one &&
      checkStepsWinner({
        startIds: [1, 2, 3, 4, 5, 6],
        endIds: [31, 32, 33, 34, 35, 36],
        stepsStore: stepsPlayer1,
      })
    ) {
      toast.success("Player One has Won!");
    } else {
    }
  }, [stepsPlayer1, stepsPlayer2, turn]);

  return null;
}

export default WinnerCheck;
