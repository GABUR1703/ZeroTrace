import type { CSSProperties } from 'react';
type Props = { score: number };
export function ScoreRing({ score }: Props) {
  return <div className="score-ring" style={{ '--score': `${score * 3.6}deg` } as CSSProperties}><div><strong>{score}</strong><span>/100</span></div></div>;
}
