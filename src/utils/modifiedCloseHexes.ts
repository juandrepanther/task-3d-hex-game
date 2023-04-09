import { ISteps } from "../types";

export const modifiedCloseHexes = (foundCloseHexes: ISteps[]): ISteps[] =>
  foundCloseHexes.map((closeHex) => {
    return {
      ...closeHex,
      connections: closeHex.connections + 1,
    };
  });
