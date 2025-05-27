import React, { useEffect, useState } from 'react';
import './App19.css';

export default function App19() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");

  const gameOver = wickets >= 10;

  useEffect(() => {
    if (gameOver) {
      setMessage("Game Over!");
    }
  }, [wickets, gameOver]);

  const handleRun = () => {
    if (!gameOver) {
      setRuns(prev => prev + 1);
      setMessage("Well Done!");
    }
  };

  const handleWicket = () => {
    if (!gameOver) {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      if (newWickets >= 10) {
        setMessage("Game Over!");
      } else {
        setMessage("Better Luck Next Time!");
      }
    }
  };

  return (
    <>
     <h1 style={{ color: "#d86c7a" }}>App19</h1>
    <div className="app-container">

      <h2 className="title" style={{ color: "#d86c7a" }}>Cricket Score Board</h2>

      <div className="score-sec">
        <div className="score-box">
          <div className="score-value" style={{ color: "#d86c7a" }}>{runs}</div>
          <button onClick={handleRun} className="score-button">Run</button>
          <div className="score-value" style={{ color: "#d86c7a" }}>{wickets}</div>
          <button onClick={handleWicket} className="score-button">Wicket</button>
        </div>

        <div className="message-box">
          <h3 style={{ color: "#d86c7a" }}>{message}</h3>
        </div>
      </div>
    </div>
    </>
  );
}
