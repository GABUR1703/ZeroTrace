import type { ReactNode } from 'react';
import { Icon } from '../ui/Icon';
type Props = { title: string; icon: string; tone: 'cyan' | 'lime' | 'amber'; children: ReactNode };
export function FeedbackBlock({ title, icon, tone, children }: Props) {
  return <section className={`feedback-block feedback-block--${tone}`}><h2><Icon name={icon} />{title}</h2><div>{children}</div></section>;
}
