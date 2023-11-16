import React, { useState } from 'react';
import Stats from './Stats';
import Topic from './Topic';
import topics from './TopicData';
import Choices from './Choices';
import GameOver from './GameOver';
import GameClear from './GameClear';
import './Game.css';

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null); // 現在のトピックを保持するためのステート
  const [supportRates, setSupportRates] = useState({ youth: 50, elderly: 50 });
  const [budget, setBudget] = useState(1000);

  // 新しいトピックをランダムに選ぶ関数
  const pickNewTopic = (currentTopicId) => {
    let newTopic;
    do {
      newTopic = topics[Math.floor(Math.random() * topics.length)];
    } while(newTopic.id === currentTopicId); // 現在のトピックと異なるトピックが選ばれるまでループ
    return newTopic;
  };

  // ゲームを開始する関数
  const startGame = () => {
    setCurrentTopic(pickNewTopic(null));
    setIsGameStarted(true);
  };

  // 選択肢が選ばれたときのハンドラ
  const handleChoice = (choiceEffect) => {
    // 支持率を更新
    setSupportRates(prevRates => ({
      youth: Math.min(100, Math.max(0, prevRates.youth + choiceEffect.youth)),
      elderly: Math.min(100, Math.max(0, prevRates.elderly + choiceEffect.elderly)),
    }));
    // 予算を更新
    setBudget(prevBudget => Math.max(0, prevBudget + choiceEffect.budget));

    // 新しいトピックを選ぶ
    setCurrentTopic(pickNewTopic(currentTopic.id));
  };

  // ゲームオーバー判定ロジック
  const isGameOver = () => (
    supportRates.youth <= 0 || supportRates.elderly <= 0 || budget <= 0
  );

  // ゲームクリア判定ロジック
  const isGameClear = () => (
    supportRates.youth >= 100 && supportRates.elderly >= 100 && budget > 0
  );

  // ゲームが開始されていないときのスタート画面の描画
  if (!isGameStarted) {
    return (
      <div className="start-screen">
        <h1>総理大臣シミュレーション</h1>
        <p>あなたの決断で国を導きましょう。</p>
        <button onClick={startGame}>START</button>
      </div>
    );
  }

  // ゲーム画面の描画
  return (
    <div className="game-screen">
      <Stats supportRates={supportRates} budget={budget} />
      {currentTopic && ( // currentTopicがnullでなければ以下を描画
        <>
          <Topic currentTopicId={currentTopic.id} />
          <Choices choices={currentTopic.choices} onChoiceMade={handleChoice} />
        </>
      )}
      {isGameOver() && <GameOver />}
      {isGameClear() && <GameClear />}
    </div>
  );
};

export default Game;
