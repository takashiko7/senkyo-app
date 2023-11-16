// 他のインポート後に...
import topics from './TopicData'; // トピックデータのインポート
import React, { useState } from 'react';
import './Topic.css'; // スタイルシートをインポート

const Topic = ({ currentTopicId }) => {
  const [showDetail, setShowDetail] = useState(false); // 詳細を表示するかどうかのステート
  const topic = topics.find(t => t.id === currentTopicId);

  if (!topic) return null; // トピックが見つからない場合は何も表示しない

  // 詳細表示のトグル関数
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="topic">
      <img src={topic.image} alt="Topic visual" className="topic-image" />
      <div className="bubble">
        <p>{topic.description}</p>
        {/* 詳細ボタン */}
        <button onClick={toggleDetail} className="detail-button">詳細</button>
        {/* 詳細情報テキスト */}
        {showDetail && <div className="detail-text show-detail">{topic.detail}</div>}
      </div>
    </div>
  );
};

export default Topic;
