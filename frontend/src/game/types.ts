export type DifficultyId = 'beginner' | 'confident' | 'advanced';

export type Difficulty = {
  id: DifficultyId;
  title: string;
  description: string;
  features: string[];
  accent: 'lime' | 'cyan' | 'violet';
};

export type Answer = {
  id: string;
  text: string;
  score: number;
};

export type Scenario = {
  id: number;
  time: string;
  label: string;
  title: string;
  category: string;
  icon: string;
  situation: string;
  answers: Answer[];
  consequence: string;
  explanation: string;
  recommendation: string;
  hackerOpinion: string;
  expertOpinion: string;
};

export type GameAnswer = {
  scenarioId: number;
  answerId: string;
  score: number;
};

export type AppScreen =
  | 'start'
  | 'difficulty'
  | 'loading'
  | 'scenario'
  | 'feedback'
  | 'perspectives'
  | 'final'
  | 'memo';
