import { useState } from 'react';
import { ActionButton } from '../components/ui/ActionButton';
import { Icon } from '../components/ui/Icon';

type Props = { onStart: () => void };

const categories = [
  ['lock', 'Пароли', 'violet'], ['phishing', 'Фишинг', 'red'], ['wifi', 'Wi‑Fi', 'cyan'],
  ['user-shield', 'Приватность', 'cyan'], ['device', 'Устройства', 'blue'], ['card', 'Финансы', 'yellow'],
];

const route = [
  ['smartphone', '07:30', 'Смартфон'], ['coffee', '08:45', 'Кафе'], ['device', '10:30', 'Офис'],
  ['wifi', '13:20', 'Интернет'], ['mail', '15:40', 'Почта'], ['card', '18:15', 'Покупки'],
  ['home', '20:30', 'Дом'], ['trophy', 'Финал', 'Твой результат'],
];

export function StartScreen({ onStart }: Props) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <main className="hero-page">
      <section className="hero">
        <header className="hero__header">
          <a className="hero-brand" href="#hero" aria-label="Музей криптографии">
            <Icon name="shield-keyhole" size={54} />
            <span>Музей <b>криптографии</b></span>
          </a>
          <div className="hero__controls">
            <button className="header-button" onClick={() => setAboutOpen((value) => !value)} aria-expanded={aboutOpen}><Icon name="info" />О проекте</button>
            <button className={`sound-button ${soundEnabled ? 'is-active' : ''}`} onClick={() => setSoundEnabled((value) => !value)} aria-label={soundEnabled ? 'Выключить звук' : 'Включить звук'}><Icon name="volume" size={30} /></button>
          </div>
        </header>

        {aboutOpen && <aside className="about-popover"><button onClick={() => setAboutOpen(false)}>×</button><h2>О проекте</h2><p>Интерактивный маршрут Музея криптографии помогает проверить привычки цифровой безопасности за 5–7 минут.</p></aside>}

        <div className="hero__body" id="hero">
          <div className="hero__content">
            <h1>Маршрут <em>цифрового дня</em></h1>
            <p className="hero__lead">Один день. 8 ситуаций. Твои решения.</p>
            <p className="hero__description">Тебе предстоит пройти обычный цифровой день — от первого взгляда на смартфон утром до возвращения домой вечером.</p>

            <div className="hero-categories">
              {categories.map(([icon, label, tone]) => <div className={`hero-category hero-category--${tone}`} key={label}><Icon name={icon} size={38} /><span>{label}</span></div>)}
            </div>

            <div className="hero-benefits">
              <p><Icon name="check-circle" /><span>В каждой ситуации — несколько вариантов действий.<br />Выбирай так, как поступил бы в реальной жизни.</span></p>
              <p><Icon name="search-plus" /><span>После решения ты узнаешь, к каким последствиям оно<br />могло привести и как действовать безопаснее.</span></p>
              <p><Icon name="bars" /><span>В конце маршрута ты получишь свой<br /><b>индекс цифровой безопасности.</b></span></p>
            </div>

            <div className="hero-facts">
              <span><Icon name="calendar" />8 сценариев</span><span><Icon name="clock" />~5–7 минут</span><span><Icon name="user-shield" />Без регистрации</span>
            </div>
            <ActionButton icon="arrow-right" onClick={onStart}>Начать маршрут</ActionButton>
            <p className="hero__note"><Icon name="lock" />Баллы скрыты до принятия решения.<br />Здесь важен твой выбор, а не угадывание правильного ответа.</p>
          </div>

          <div className="hero-route" aria-label="Маршрут цифрового дня">
            <div className="hero-route__path" aria-hidden="true" />
            {route.map(([icon, time, label], index) => (
              <div className={`route-card route-card--${index + 1} ${index === route.length - 1 ? 'route-card--final' : ''}`} key={label}>
                <Icon name={icon} size={index === route.length - 1 ? 46 : 34} />
                <div><b>{time}</b><span>{label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
