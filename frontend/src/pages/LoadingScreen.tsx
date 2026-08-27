import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
import type { Difficulty } from '../game/types';

type Props = { difficulty: Difficulty; onReady: () => void; onBack: () => void };

export function LoadingScreen({ difficulty, onReady, onBack }: Props) {
  return (
    <ScreenLayout step={3} title="Инициализация" onBack={onBack}>
      <div className="loading-screen">
        <h1>Инициализация<br />маршрута...</h1>
        <div className="radar"><i /><i /><i /><Icon name="shield-keyhole" size={92} /></div>
        <dl>
          <div><dt>Сценариев</dt><dd>8</dd></div>
          <div><dt>Время</dt><dd>~5–7 мин</dd></div>
          <div><dt>Профиль</dt><dd>Не определён</dd></div>
          <div><dt>Уровень</dt><dd>{difficulty.title}</dd></div>
        </dl>
        <ActionButton icon="check" onClick={onReady}>Маршрут готов</ActionButton>
        <p>Переходим к сценарию 1...</p>
      </div>
    </ScreenLayout>
  );
}
