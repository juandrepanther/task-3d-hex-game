import { player, ISteps } from "./../types";

const useCheckIdExists = (
  id: number,
  turn: player,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
) => {
  if (turn === player.one) {
    const idExists = stepsPlayer1.some((item: ISteps) => item.id === id);

    return idExists;
  }

  if (turn === player.two) {
    const idExists = stepsPlayer2.some((item: ISteps) => item.id === id);

    return idExists;
  }
};

export default useCheckIdExists;
