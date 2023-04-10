import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckIdExists from "../hooks/useCheckIdExists";
import { RootState } from "../store/store";
import { stepHandler } from "../tools/stepHandler";
import { Hexagon, player } from "../types";

function Hex({ id }: Hexagon) {
  const [isSelected, setIsSelected] = useState("");
  const dispatch = useDispatch();
  const { turn } = useSelector((state: RootState) => state.stepTurn_reducer);
  const stepsPlayer1 = useSelector(
    (state: RootState) => state.player1_reducer.steps
  );
  const stepsPlayer2 = useSelector(
    (state: RootState) => state.player2_reducer.steps
  );

  const styleHandler = () => {
    if (
      turn === player.one &&
      !useCheckIdExists(id, stepsPlayer1, stepsPlayer2)
    ) {
      setIsSelected("player1");
    }
    if (
      turn === player.two &&
      !useCheckIdExists(id, stepsPlayer1, stepsPlayer2)
    ) {
      setIsSelected("player2");
    }
  };

  return (
    <div
      onClick={() => {
        stepHandler(id, dispatch, turn, stepsPlayer1, stepsPlayer2);
        styleHandler();
      }}
      className={`hexagon ${isSelected}`}
    >
      {id}
    </div>
  );
}

export default Hex;
