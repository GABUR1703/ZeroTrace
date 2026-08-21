import { taxiAnswers } from '../game/scenario';

type Props = { selectedId: number; onSelect: (id: number) => void };

export function AnswerList({ selectedId, onSelect }: Props) {
  return <div className="answer-list">
    {taxiAnswers.map((answer) => <button
      className={`answer-list__item ${selectedId === answer.id ? 'answer-list__item--selected' : ''}`}
      type="button" onClick={() => onSelect(answer.id)} key={answer.id}
    >
      <span className="answer-list__radio">{selectedId === answer.id ? '✓' : ''}</span>
      <span className="answer-list__text">{answer.text}</span>
      <strong className={`answer-list__score answer-list__score--${answer.score > 0 ? 'positive' : answer.score < 0 ? 'negative' : 'neutral'}`}>
        {answer.score > 0 ? '+' : ''}{answer.score} баллов
      </strong>
    </button>)}
  </div>;
}
