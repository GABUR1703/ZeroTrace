import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { FeedbackBlock } from '../components/feedback/FeedbackBlock';
import { Icon } from '../components/ui/Icon';
import type { Answer, Scenario } from '../game/types';
type Props = { scenario: Scenario; answer: Answer; onContinue: () => void; onBack: () => void };
export function FeedbackScreen({ scenario, answer, onContinue, onBack }: Props) {
  const positive = answer.score >= 8;
  return <ScreenLayout step={5} title="Результат ответа" onBack={onBack}><div className="feedback-screen">
    <div className={`answer-score ${positive ? 'is-positive' : 'is-risky'}`}><div><h1>{positive ? 'Отличный выбор!' : 'Есть риск'}</h1><strong>{answer.score > 0 ? '+' : ''}{answer.score} баллов</strong></div><span><Icon name={positive ? 'check' : 'warning'} size={76} /></span></div>
    <FeedbackBlock title="Последствие" icon="route" tone="lime"><p>{scenario.consequence}</p></FeedbackBlock>
    <FeedbackBlock title="Почему это важно?" icon="warning" tone="amber"><p>{scenario.explanation}</p></FeedbackBlock>
    <FeedbackBlock title="Безопасная практика" icon="shield-keyhole" tone="lime"><p>{scenario.recommendation}</p></FeedbackBlock>
    <ActionButton icon="arrow-right" onClick={onContinue}>Далее</ActionButton>
  </div></ScreenLayout>;
}
