import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
import { AnswerOption } from '../components/scenario/AnswerOption';
import { ScenarioProgress } from '../components/scenario/ScenarioProgress';
import type { Difficulty, Scenario } from '../game/types';

type Props = { scenario: Scenario; index: number; total: number; difficulty: Difficulty; selected: string | null; onSelect: (id: string) => void; onSubmit: () => void; onBack: () => void };

export function ScenarioScreen({ scenario, index, total, difficulty, selected, onSelect, onSubmit, onBack }: Props) {
  return (
    <ScreenLayout step={4} title="Игра — сценарий" compact onBack={onBack}>
      <div className="scenario-screen">
        <div className="scenario-screen__meta"><span>{scenario.time}</span><i />Сценарий {index + 1} из {total}<b>{difficulty.title} уровень</b></div>
        <ScenarioProgress current={index + 1} total={total} />
        <div className="scenario-screen__body">
          <div className="scenario-screen__question">
            <span className="eyebrow"><Icon name={scenario.icon} />{scenario.category}</span>
            <h1>{scenario.title}</h1><p>{scenario.situation}</p><h2>Что ты сделаешь?</h2>
            <div className="answer-options">{scenario.answers.map((answer) => <AnswerOption key={answer.id} {...answer} selected={selected === answer.id} onClick={() => onSelect(answer.id)} />)}</div>
          </div>
          <div className="device-visual" aria-hidden="true"><Icon name={scenario.icon} size={72} /><Icon name="warning" size={48} /><span>{scenario.label}</span></div>
        </div>
        <ActionButton icon="arrow-right" disabled={!selected} onClick={onSubmit}>Ответить</ActionButton>
      </div>
    </ScreenLayout>
  );
}
