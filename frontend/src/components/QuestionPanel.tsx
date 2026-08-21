import { AnswerList } from './AnswerList';

type Props = { selectedId: number; onSelect: (id: number) => void };

export function QuestionPanel({ selectedId, onSelect }: Props) {
  return <section className="question-panel">
    <span className="question-panel__category">🚕 &nbsp; ТАКСИ</span>
    <h1 className="question-panel__title">Приложение такси запрашивает доступ к контактам, геолокации, микрофону и фото.</h1>
    <p className="question-panel__prompt">Что вы сделаете?</p>
    <AnswerList selectedId={selectedId} onSelect={onSelect} />
  </section>;
}
