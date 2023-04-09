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
