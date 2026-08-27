import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
import type { Scenario } from '../game/types';
type Props = { scenario: Scenario; isLast: boolean; onContinue: () => void; onBack: () => void };
export function PerspectivesScreen({ scenario, isLast, onContinue, onBack }: Props) {
  return <ScreenLayout step={6} title="Мнение хакера и эксперта" onBack={onBack}><div className="perspectives-screen">
    <article className="perspective-card perspective-card--hacker"><span>Мнение хакера</span><div className="perspective-card__portrait"><Icon name="hacker" size={108} /></div><p>«{scenario.hackerOpinion}»</p></article>
    <article className="perspective-card perspective-card--expert"><span>Мнение эксперта</span><div className="perspective-card__portrait"><Icon name="expert" size={108} /></div><p>{scenario.expertOpinion}</p></article>
    <ActionButton icon="arrow-right" onClick={onContinue}>{isLast ? 'Узнать результат' : 'Продолжить маршрут'}</ActionButton>
  </div></ScreenLayout>;
}
