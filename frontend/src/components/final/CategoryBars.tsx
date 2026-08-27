type Props = { results: { name: string; score: number }[] };
export function CategoryBars({ results }: Props) {
  return <div className="category-bars">{results.map((item) => <div key={item.name}><span>{item.name}</span><i><b style={{ width: `${item.score}%` }} /></i><strong>{item.score}/100</strong></div>)}</div>;
}
