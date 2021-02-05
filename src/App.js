import React, { useState } from "react";
import Ball from "./Ball";
import "./App.css";

function App() {
  const [balls, setBalls] = useState([]);
  const [num, setNum] = useState(1);
  const [speed, setSpeed] = useState(600);
  const [delay, setDelay] = useState(0);

  const addBall = () => {
    setNum((prevVal) => prevVal + 1);
    setBalls([...balls, num]);
    setSpeed(speed + 0.0000001);
  };

  const removeBall = () => {
    if(num > 1){
      setNum((prevVal) => prevVal - 1);
      let newBallArray = balls;
      newBallArray.pop();
      setBalls(newBallArray);
      setSpeed(speed + 0.0000001);
    }
  };

  return (
    <div className="App">
      <div className="front f1"></div>

      <div className="title">
        <h1>WEB ANIMATIONS</h1>
        <h3>Using REACT</h3>
      </div>

      <div className="front">
        <div className="bballs">MAGIC BALLS</div>
        <div className="balls">
          {balls.map((ball) => {
            return (
              <Ball
                key={ball}
                index={ball}
                speed={speed}
                delay={ball * delay}
              />
            );
          })}
        </div>
        <div className="shelf"></div>
        <div className="buttons">
          <button className="btn" onClick={addBall}>
            Add New Ball
          </button>
          <button
            className="btn"
            onClick={() => setSpeed((prevVal) => (prevVal -= 50))}>
            Increase Speed
          </button>
          <button
            className="btn"
            onClick={() => setSpeed((prevVal) => (prevVal += 50))}>
            Decrease Speed
          </button>
          <button className="btn" onClick={() => setDelay(1)}>
            Harmonic
          </button>
          <button className="btn" onClick={() => setDelay(0)}>
            Synchronized
          </button>
          <button className="btn" onClick={removeBall}>
            Remove One Ball
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
