import React from 'react';
import ReactDOM from 'react-dom/client';
import { GamePage } from './pages/GamePage';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><GamePage /></React.StrictMode>,
);
