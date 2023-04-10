import { ISteps } from "./../types";

// return true if exists

const useCheckIdExists = (
  id: number,
  stepsPlayer1: ISteps[],
  stepsPlayer2: ISteps[]
): boolean => {
  const idExistsPlayer1STepStore = stepsPlayer1.some(
    (item: ISteps) => item.id === id
  );
  const idExistsPlayer2STepStore = stepsPlayer2.some(
    (item: ISteps) => item.id === id
  );

  const checkResults = [idExistsPlayer1STepStore, idExistsPlayer2STepStore];

  console.log(checkResults);

  return checkResults.some((value) => value === true); // if any is true (means exists), return true
};

export default useCheckIdExists;
