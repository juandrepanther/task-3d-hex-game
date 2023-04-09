import React from "react";
import "../styles/App.css";
import { data } from "./gameboardData";
import Hex from "./Hex";

function App() {
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
    </div>
  );
}

export default App;
