type Props = { current: number; total: number };

export function ScenarioProgress({ current, total }: Props) {
  return <div className="scenario-progress"><span style={{ width: `${(current / total) * 100}%` }} /></div>;
}
