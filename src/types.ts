export enum player {
  one = "player1",
  two = "player2",
  none = "",
}

export interface IStepTurn {
  turn: player;
}

export type connectionsType = number;

export interface ISteps {
  id: number;
  connections: connectionsType;
  player: player;
}

export interface IPlayer_reducer {
  steps: ISteps[];
}

export interface Hexagon {
  id: number;
}

export interface HexRow {
  id: number;
  marginLeft?: string;
  hexagons: Hexagon[];
}

export interface IUpdateCurrentStepPlayer {
  id: number;
  connectedSteps: number;
}

export interface ICheckStepsWinner {
  startIds: number[];
  endIds: number[];
  stepsStore: ISteps[];
  playerCheck: player;
}

export interface IResult {
  isStartIdStep: boolean;
  isEndIdStep: boolean;
  isAtLeastOneConnectedInHexRow: boolean;
}
