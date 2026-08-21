import { phonePermissions } from '../game/scenario';

export function PhonePreview() {
  return <div className="phone-preview" aria-hidden="true">
    <div className="phone-preview__glow" />
    <div className="phone-preview__device">
      <div className="phone-preview__speaker" />
      <div className="phone-preview__app-icon">🚕</div>
      <strong>Приложение такси</strong><small>запрашивает доступ</small>
      <div className="phone-preview__permissions">
        {phonePermissions.map((item) => <div className="phone-preview__permission" key={item.label}>
          <span>{item.icon}</span><em>{item.label}</em>
          <b className={item.allowed ? 'is-allowed' : 'is-denied'}>{item.allowed ? '✓' : '!'}</b>
        </div>)}
      </div>
      <button type="button" tabIndex={-1}>Разрешить</button><small>Не сейчас</small>
    </div>
  </div>;
}
