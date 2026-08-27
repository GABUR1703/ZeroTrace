import React from 'react';
import ReactDOM from 'react-dom/client';
import { MuseumApp } from './MuseumApp';
import './scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><MuseumApp /></React.StrictMode>,
);
