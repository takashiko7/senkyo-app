import React from 'react';
import './Stats.css';
import budgetImage from './assets/budget.jpg';


const getBarColor = (percentage) => {
  if (percentage <= 20) return '#ff4d4f'; // 赤色
  if (percentage <= 80) return '#4CAF50'; // 緑色
  return '#1890ff'; // 青色
};

const Stats = ({ supportRates, budget }) => {
  // 予算のパーセントを計算（予算が最大値からどれだけ減ったかに応じて）
  const budgetPercent = budget / 50; // 例: 予算が最大100億と仮定

  return (
    <div className="stats-container">
      <div className="rate-section">
        <h2>支持率</h2>
        <div className="rate-bar-container">
          <span>若者: {supportRates.youth}%</span>
          <div className="rate-bar-background">
            <div className="rate-bar" style={{ width: `${supportRates.youth}%`, backgroundColor: getBarColor(supportRates.youth) }}></div>
          </div>
        </div>
        <div className="rate-bar-container">
          <span>高齢者: {supportRates.elderly}%</span>
          <div className="rate-bar-background">
            <div className="rate-bar" style={{ width: `${supportRates.elderly}%`, backgroundColor: getBarColor(supportRates.elderly) }}></div>
          </div>
        </div>
      </div>
      <div className="budget-section">
        <h2>予算</h2>
        <div className="budget-bar-container">
          <img src={budgetImage} alt="予算" style={{ width: `${budgetPercent}%` }} />
        </div>
        <span>残り予算: ¥{budget}億</span>
      </div>
    </div>
  );
};

export default Stats;
