import { data } from "../board/gameboardData";
import { HexRow, ICheckStepsWinner, IResult, ISteps, player } from "./../types";

export const checkStepsWinner = ({
  startIds,
  endIds,
  stepsStore,
  playerCheck,
}: ICheckStepsWinner) => {
  let result: IResult = {
    isStartIdStep: false,
    isEndIdStep: false,
    isAtLeastOneConnectedInHexRow: false,
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

  // check if all rows of hex has at least one hex with connections >= 2
  //@ player one and player to has different orientations of the row
  //! HERE BUG, need to describe it here

  if (playerCheck === player.one) {
    function checkHexagonsRowsPlayer1(
      data: HexRow[],
      stepsStoreData: ISteps[]
    ) {
      for (let i = 0; i < data.length; i++) {
        let hexagons = data[i].hexagons;
        let found = false;

        for (let j = 0; j < hexagons.length; j++) {
          let hexagon = hexagons[j];

          let match = stepsStoreData.find((item) => item.id === hexagon.id);

          //main check
          if (match && match.connections >= 2) {
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }

    const connectionsCheck = checkHexagonsRowsPlayer1(data, stepsStore);

    if (connectionsCheck) {
      result = { ...result, isAtLeastOneConnectedInHexRow: true };
    }
  }

  //@ PLAYER TWO WINNER CHECK COLUMNS

  if (playerCheck === player.two) {
    // extract columns

    function getColumnsArrayIdsPLayer2(data: HexRow[]) {
      const hexagonIdsByIndex = [];
      const numHexagons = data[0].hexagons.length;

      for (let i = 0; i < numHexagons; i++) {
        const hexagonIds = [];

        for (let j = 0; j < data.length; j++) {
          hexagonIds.push(data[j].hexagons[i].id);
        }

        hexagonIdsByIndex.push(hexagonIds);
      }

      return hexagonIdsByIndex;
    }

    function checkHexagonsRowsPlayer2(
      data: number[][],
      stepsStoreData: ISteps[]
    ) {
      for (let i = 0; i < data.length; i++) {
        let hexagons = data[i];
        let found = false;

        for (let j = 0; j < hexagons.length; j++) {
          let hexagonId = hexagons[j];

          let match = stepsStoreData.find((item) => item.id === hexagonId);

          //main check
          if (match && match.connections >= 2) {
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }

    const connectionsCheck = checkHexagonsRowsPlayer2(
      getColumnsArrayIdsPLayer2(data),
      stepsStore
    );

    if (connectionsCheck) {
      result = { ...result, isAtLeastOneConnectedInHexRow: true };
    }
  }

  // console.log(stepsStore);

  // final check
  const isWinner = Object.values(result).every((value) => value === true);

  return isWinner;
};
