import { routeSteps } from '../game/scenario';

export function GameRoute() {
  return <nav className="game-route" aria-label="Маршрут цифрового дня">
    {routeSteps.map((step, index) => {
      const modifier = index === 0 ? 'game-route__step--done' : index === 1 ? 'game-route__step--active' : '';
      return <div className={`game-route__step ${modifier}`} key={step.label}>
        <div className="game-route__icon"><span>{step.icon}</span>{index === 0 && <b>✓</b>}</div>
        <span className="game-route__number">{index + 1}</span>
        <span className="game-route__label">{step.label}</span>
      </div>;
    })}
  </nav>;
}
