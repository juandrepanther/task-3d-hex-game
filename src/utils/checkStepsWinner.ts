import { ICheckStepsWinner, IResult } from "./../types";

export const checkStepsWinner = ({
  startIds,
  endIds,
  stepsStore,
}: ICheckStepsWinner) => {
  let result: IResult = {
    isStartIdStep: false,
    isEndIdStep: false,
    isConnectionsAll: false,
  };

  for (let i = 0; i < stepsStore.length; i++) {
    const id = stepsStore[i].id;

    if (startIds.includes(id)) {
      result = { ...result, isStartIdStep: true };
    }
  }

  for (let i = 0; i < stepsStore.length; i++) {
    const id = stepsStore[i].id;

    if (endIds.includes(id)) {
      result = { ...result, isEndIdStep: true };
    }
  }

  //@ check if all other connections are more than 2
  //! BUG: outside HEXes breaks this logic

  let booleans = [];

  for (let i = 0; i < stepsStore.length; i++) {
    if (stepsStore[i].connections >= 2) {
      booleans.push(true);
    } else {
      booleans.push(false);
    }
  }

  const isAllTrue = booleans.every((bool) => bool === true);

  if (isAllTrue) {
    result = { ...result, isConnectionsAll: true };
  }

  const isWinner = Object.values(result).every((value) => value === true);

  return isWinner;
};
