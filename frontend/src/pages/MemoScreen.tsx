import { ScreenLayout } from '../components/layout/ScreenLayout';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';
type Props = { onHome: () => void; onBack: () => void };
const memo = [['mail','Проверяй источники','Не переходи по ссылкам из писем и уведомлений.'],['key','Сильные пароли','Используй длинные пароли и менеджер паролей.'],['shield-keyhole','Двухфакторная защита','Включай MFA везде, где это возможно.'],['wifi','Осторожный Wi‑Fi','Не используй открытые сети для важных действий.'],['device','Обновляй устройства','Устанавливай обновления вовремя.'],['lock','Защищай личные данные','Не делись лишней информацией в сети.']];
export function MemoScreen({ onHome, onBack }: Props) {
  return <ScreenLayout step={8} title="Памятка" onBack={onBack}><div className="memo-screen"><h1>Твоя памятка<br />цифровой безопасности</h1><p>Короткие правила на каждый день</p>
    <div className="memo-list">{memo.map(([icon,title,text]) => <article key={title}><Icon name={icon} /><div><h2>{title}</h2><p>{text}</p></div></article>)}</div>
    <ActionButton icon="download" onClick={() => window.print()}>Скачать памятку (PDF)</ActionButton><button className="text-button" onClick={onHome}><Icon name="arrow-right" /> Вернуться на главную</button>
  </div></ScreenLayout>;
}
