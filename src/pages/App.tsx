import { useState } from "react";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  const marginStep1 = "7.2rem";
  const marginStep2 = "14.4rem";
  const marginStep3 = "21.6rem";
  const marginStep4 = "28.8rem";
  const marginStep5 = "36rem";

  return (
    <div className="App">
      <div id="gameboard">
        <div className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div style={{ marginLeft: marginStep1 }} className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div style={{ marginLeft: marginStep2 }} className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div style={{ marginLeft: marginStep3 }} className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div style={{ marginLeft: marginStep4 }} className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div style={{ marginLeft: marginStep5 }} className="hex-row">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
