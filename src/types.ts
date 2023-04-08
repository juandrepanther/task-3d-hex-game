export enum player {
  red = "red",
  blue = "blue",
  none = "",
}

export interface IStepTurn {
  turn: player;
}

export interface ISteps {
  id: number;
  connectionStatus: {
    first: boolean;
    second: boolean;
  };
  player: player;
}

export interface IPlayer_reducer {
  steps: ISteps[];
}
