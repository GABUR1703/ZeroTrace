import { useState } from 'react';
import { GameRoute } from '../components/GameRoute';
import { InfoCard } from '../components/InfoCard';
import { PhonePreview } from '../components/PhonePreview';
import { QuestionPanel } from '../components/QuestionPanel';
import { Topbar } from '../components/Topbar';

export function GamePage() {
  const [selectedId, setSelectedId] = useState(2);
  return <div className="game-page">
    <Topbar />
    <GameRoute />
    <main className="game-card">
      <QuestionPanel selectedId={selectedId} onSelect={setSelectedId} />
      <PhonePreview />
      <aside className="game-card__tips">
        <InfoCard title="Почему это важно?">Приложению такси не нужен доступ к контактам и фото. Чем меньше разрешений, тем меньше данных может утечь.</InfoCard>
        <InfoCard title="Безопасная практика">Предоставляйте приложениям только минимально необходимые разрешения и только во время использования.</InfoCard>
      </aside>
      <button className="game-card__hint" type="button">♧ <span>Подсказка</span></button>
      <button className="game-card__confirm" type="button">Подтвердить выбор <span>→</span></button>
    </main>
  </div>;
}
