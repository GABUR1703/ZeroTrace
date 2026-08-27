import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
import { CategoryBars } from '../components/final/CategoryBars';
import { ScoreRing } from '../components/final/ScoreRing';
import type { Difficulty, GameAnswer } from '../game/types';
import { scenarios } from '../game/scenarios';
type Props = { answers: GameAnswer[]; difficulty: Difficulty; onReplay: () => void; onMemo: () => void; onBack: () => void };
export function FinalScreen({ answers, difficulty, onReplay, onMemo, onBack }: Props) {
  const score = Math.round(answers.reduce((sum, item) => sum + item.score, 0) / (scenarios.length * 10) * 100);
  const categoryResults = scenarios.map((scenario) => ({ name: scenario.category, score: (answers.find((a) => a.scenarioId === scenario.id)?.score ?? 0) * 10 }));
  const strengths = categoryResults.filter((item) => item.score >= 80).slice(0, 3);
  const risks = categoryResults.filter((item) => item.score < 80).slice(0, 3);
  return <ScreenLayout step={7} title="Финальный индекс" compact onBack={onBack}><div className="final-screen">
    <section className="final-score"><h1>Твой индекс<br />цифровой безопасности</h1><ScoreRing score={score} /><b>{score >= 80 ? 'Отличный результат' : score >= 60 ? 'Хороший результат' : 'Есть куда расти'}</b></section>
    <section className="profile-card"><h2>Профиль игрока</h2><dl><div><dt>Уровень</dt><dd>{difficulty.title}</dd></div><div><dt>Пройдено</dt><dd>{answers.length} из {scenarios.length}</dd></div><div><dt>Результат</dt><dd>{score}/100</dd></div></dl></section>
    <section className="result-card result-card--categories"><h2>По категориям</h2><CategoryBars results={categoryResults} /></section>
    <section className="result-card result-card--strengths"><h2>Твои сильные стороны</h2>{strengths.length ? strengths.map((item) => <p key={item.name}><Icon name="check" />{item.name}</p>) : <p>Пройди маршрут ещё раз и улучши результат.</p>}</section>
    <section className="result-card result-card--risks"><h2>Зоны роста</h2>{risks.length ? risks.map((item) => <p key={item.name}><Icon name="warning" />{item.name}</p>) : <p>Критичных зон риска не обнаружено.</p>}</section>
    <div className="final-screen__actions"><ActionButton variant="secondary" icon="refresh" onClick={onReplay}>Пройти ещё раз</ActionButton><ActionButton icon="download" onClick={onMemo}>Получить памятку</ActionButton></div>
  </div></ScreenLayout>;
}
