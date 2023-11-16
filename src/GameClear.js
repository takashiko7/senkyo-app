// GameClear.js
import React from 'react';
import './GameClear.css';

const GameClear = () => {
  return (
    <div className="game-clear">
      <h1>Congratulations!</h1>
      <p>あなたの政策が国を良い方向に導きました</p>
      <button onClick={() => window.location.reload()}>もう一度挑戦</button>
    </div>
  );
};

export default GameClear;
