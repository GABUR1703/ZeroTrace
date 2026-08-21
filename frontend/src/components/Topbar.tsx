import { Brand } from './Brand';
import { ProgressBar } from './ProgressBar';

export function Topbar() {
  return <header className="topbar">
    <Brand />
    <button className="topbar__exit" type="button">⇥ Выход</button>
    <ProgressBar />
    <div className="topbar__actions">
      <span className="topbar__timer">◷ <b>01:34</b></span>
      <button className="topbar__pause" type="button">Ⅱ <span>Пауза</span></button>
    </div>
  </header>;
}
