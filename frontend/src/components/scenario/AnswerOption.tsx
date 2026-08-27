type Props = { id: string; text: string; selected: boolean; onClick: () => void };

export function AnswerOption({ id, text, selected, onClick }: Props) {
  return <button className={`answer-option ${selected ? 'is-selected' : ''}`} onClick={onClick}><b>{id}</b><span>{text}</span></button>;
}
