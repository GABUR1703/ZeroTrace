import type { ReactNode } from 'react';
import { MuseumHeader } from './MuseumHeader';
import { Icon } from '../ui/Icon';

type ScreenLayoutProps = { step: number; title: string; children: ReactNode; compact?: boolean; onBack?: () => void };

export function ScreenLayout({ step, title, children, compact = false, onBack }: ScreenLayoutProps) {
  return (
    <main className={`museum-app ${compact ? 'museum-app--compact' : ''}`}>
      <MuseumHeader />
      <section className="screen-panel">
        <div className="screen-panel__label">
          {onBack && <button className="screen-back" onClick={onBack}><Icon name="arrow-right" size={17} />Назад</button>}
          <b>{step}</b><span>{title}</span>
        </div>
        <div className="screen-panel__content">{children}</div>
      </section>
    </main>
  );
}
