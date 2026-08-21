import type { PropsWithChildren } from 'react';

export function InfoCard({ title, children }: PropsWithChildren<{ title: string }>) {
  return <article className="info-card">
    <h2 className="info-card__title"><span>♢</span>{title}</h2>
    <p className="info-card__text">{children}</p>
  </article>;
}
