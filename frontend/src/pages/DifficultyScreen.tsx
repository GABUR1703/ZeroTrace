import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
import { difficulties } from '../game/difficulties';
import type { DifficultyId } from '../game/types';

type Props = { selected: DifficultyId; onSelect: (id: DifficultyId) => void; onContinue: () => void; onBack: () => void };

export function DifficultyScreen({ selected, onSelect, onContinue, onBack }: Props) {
  return (
    <ScreenLayout step={2} title="Выбор сложности" onBack={onBack}>
      <div className="difficulty-screen">
        <div className="section-heading"><h1>Выбери <em>уровень сложности</em></h1><p>От уровня зависит сложность ситуаций и глубина киберугроз.</p></div>
        <div className="difficulty-grid">
          {difficulties.map((item) => (
            <button key={item.id} className={`difficulty-card difficulty-card--${item.accent} ${selected === item.id ? 'is-selected' : ''}`} onClick={() => onSelect(item.id)}>
              {item.id === 'confident' && <small>Рекомендуем</small>}
              <Icon name="shield-keyhole" size={58} />
              <h2>{item.title}</h2><p>{item.description}</p>
              <ul>{item.features.map((feature) => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul>
              <span className="difficulty-card__time"><Icon name="clock" size={15} /> ~5–7 минут</span>
            </button>
          ))}
        </div>
        <ActionButton icon="arrow-right" onClick={onContinue}>Продолжить</ActionButton>
        <p className="tip"><Icon name="lightbulb" /> Баллы показываются после каждого ответа. Здесь важны твои решения, а не угадывание.</p>
      </div>
    </ScreenLayout>
  );
}
