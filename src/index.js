import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game'; // Gameコンポーネントをインポート
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game /> {/* Appの代わりにGameコンポーネントを使います */}
  </React.StrictMode>
);

// reportWebVitalsを使ってパフォーマンス測定をする場合はそのままにします。
//reportWebVitals();

