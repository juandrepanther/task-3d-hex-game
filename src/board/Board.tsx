import React from "react";
import "../styles/App.css";
import { data } from "./gameboardData";
import Hex from "./Hex";
import WinnerCheck from "./WinnerCheck";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Board() {
  return (
    <div className="App">
      <div id="gameboard">
        {data.map((row) => (
          <div
            key={row.id}
            style={{ marginLeft: row.marginLeft }}
            className="hex-row"
          >
            {row.hexagons.map((hexagon) => (
              <Hex key={hexagon.id} {...hexagon} />
            ))}
          </div>
        ))}
      </div>
      <WinnerCheck />
      <ToastContainer />
    </div>
  );
}

export default Board;
