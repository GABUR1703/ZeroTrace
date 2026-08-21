import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss';

function App() {
  return <main>
    <p className="eyebrow">ИНТЕРАКТИВНЫЙ ТРЕНАЖЁР</p>
    <h1>ZeroTrace</h1>
    <p className="lead">Пройдите обычный цифровой день и узнайте, насколько безопасны ваши решения.</p>
    <button>Начать цифровой день</button>
    <p className="meta">8–10 ситуаций · 5–7 минут · без регистрации</p>
  </main>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
