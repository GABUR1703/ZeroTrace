import { useMemo, useState } from 'react';
import { difficulties } from './game/difficulties';
import { scenarios } from './game/scenarios';
import type { AppScreen, DifficultyId, GameAnswer } from './game/types';
import { DifficultyScreen } from './pages/DifficultyScreen';
import { FeedbackScreen } from './pages/FeedbackScreen';
import { FinalScreen } from './pages/FinalScreen';
import { LoadingScreen } from './pages/LoadingScreen';
import { MemoScreen } from './pages/MemoScreen';
import { PerspectivesScreen } from './pages/PerspectivesScreen';
import { ScenarioScreen } from './pages/ScenarioScreen';
import { StartScreen } from './pages/StartScreen';

export function MuseumApp() {
  const [screen, setScreen] = useState<AppScreen>('start');
  const [difficultyId, setDifficultyId] = useState<DifficultyId>('confident');
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<GameAnswer[]>([]);
  const difficulty = difficulties.find((item) => item.id === difficultyId) ?? difficulties[1];
  const scenario = scenarios[scenarioIndex];
  const answer = useMemo(() => scenario.answers.find((item) => item.id === selectedAnswer), [scenario, selectedAnswer]);
  const reset = () => { setScreen('start'); setScenarioIndex(0); setSelectedAnswer(null); setAnswers([]); };
  const submit = () => {
    if (!answer) return;
    setAnswers((current) => [...current.filter((item) => item.scenarioId !== scenario.id), { scenarioId: scenario.id, answerId: answer.id, score: answer.score }]);
    setScreen('feedback');
  };
  const nextScenario = () => {
    if (scenarioIndex === scenarios.length - 1) setScreen('final');
    else { setScenarioIndex((current) => current + 1); setSelectedAnswer(null); setScreen('scenario'); }
  };
  if (screen === 'start') return <StartScreen onStart={() => setScreen('difficulty')} />;
  if (screen === 'difficulty') return <DifficultyScreen selected={difficultyId} onSelect={setDifficultyId} onContinue={() => setScreen('loading')} onBack={() => setScreen('start')} />;
  if (screen === 'loading') return <LoadingScreen difficulty={difficulty} onReady={() => setScreen('scenario')} onBack={() => setScreen('difficulty')} />;
  if (screen === 'scenario') return <ScenarioScreen scenario={scenario} index={scenarioIndex} total={scenarios.length} difficulty={difficulty} selected={selectedAnswer} onSelect={setSelectedAnswer} onSubmit={submit} onBack={() => {
    if (scenarioIndex === 0) setScreen('loading');
    else {
      const previousScenario = scenarios[scenarioIndex - 1];
      const previousAnswer = answers.find((item) => item.scenarioId === previousScenario.id);
      setScenarioIndex((current) => current - 1);
      setSelectedAnswer(previousAnswer?.answerId ?? null);
      setScreen('perspectives');
    }
  }} />;
  if (screen === 'feedback' && answer) return <FeedbackScreen scenario={scenario} answer={answer} onContinue={() => setScreen('perspectives')} onBack={() => setScreen('scenario')} />;
  if (screen === 'perspectives') return <PerspectivesScreen scenario={scenario} isLast={scenarioIndex === scenarios.length - 1} onContinue={nextScenario} onBack={() => setScreen('feedback')} />;
  if (screen === 'final') return <FinalScreen answers={answers} difficulty={difficulty} onReplay={reset} onMemo={() => setScreen('memo')} onBack={() => setScreen('perspectives')} />;
  return <MemoScreen onHome={reset} onBack={() => setScreen('final')} />;
}
