import React from 'react';
import './Choices.css';

const Choices = ({ choices, onChoiceMade }) => {
  // 選択肢が提供されていない、または配列でない場合には、何も表示しない
  if (!Array.isArray(choices) || choices.length === 0) {
    return null;
  }

  return (
    <div className="choices-container">
      <h3>政策を選んで下さい</h3>
      <div className="choices-buttons">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => onChoiceMade(choice.effect)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Choices;

