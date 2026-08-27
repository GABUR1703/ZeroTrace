import { Icon } from '../ui/Icon';

export function MuseumHeader() {
  return (
    <header className="museum-header">
      <div className="museum-header__brand">
        <Icon name="shield-keyhole" size={42} />
        <span>Музей криптографии</span>
      </div>
      <p>Маршрут цифрового дня</p>
    </header>
  );
}
