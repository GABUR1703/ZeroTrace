import type { Difficulty } from './types';

export const difficulties: Difficulty[] = [
  {
    id: 'beginner',
    title: 'Новичок',
    description: 'Базовые ситуации из повседневной жизни. Идеально для старта.',
    features: ['Простые ситуации', 'Подсказки и пояснения', '8 сценариев'],
    accent: 'lime',
  },
  {
    id: 'confident',
    title: 'Уверенный',
    description: 'Более сложные и неоднозначные ситуации. Меньше подсказок.',
    features: ['Реалистичные ситуации', 'Меньше подсказок', '8 сценариев'],
    accent: 'cyan',
  },
  {
    id: 'advanced',
    title: 'Продвинутый',
    description: 'Сложные сценарии и профессиональные атаки. Минимум подсказок.',
    features: ['Продвинутые угрозы', 'Нет подсказок', '8 сценариев'],
    accent: 'violet',
  },
];
