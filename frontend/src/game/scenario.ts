export const routeSteps = [
  ['▯', 'Смартфон'], ['🚕', 'Такси'], ['☕', 'Кафе'], ['▰', 'Работа/учёба'],
  ['◔', 'Интернет'], ['▥', 'Банк'], ['✉', 'Почта'], ['♟', 'Соцсети'],
  ['◆', 'Дом'], ['♛', 'Результат'],
].map(([icon, label]) => ({ icon, label }));

export const taxiAnswers = [
  { id: 1, text: 'Разрешить всё', score: -10 },
  { id: 2, text: 'Разрешить только геолокацию во время использования', score: 20 },
  { id: 3, text: 'Запретить всё', score: 0 },
  { id: 4, text: 'Разрешить навсегда, чтобы было удобнее', score: -5 },
];

export const phonePermissions = [
  { icon: '♙', label: 'Контакты', allowed: false },
  { icon: '⌖', label: 'Геолокация', allowed: true },
  { icon: '♩', label: 'Микрофон', allowed: false },
  { icon: '▧', label: 'Фото и видео', allowed: false },
];
