// GameOver.js
import React from 'react';
import './GameOver.css';

const GameOver = () => {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <p>あなたの政策は国民に受け入れられませんでした</p>
      <button onClick={() => window.location.reload()}>もう一度挑戦</button>
    </div>
  );
};

export default GameOver;
