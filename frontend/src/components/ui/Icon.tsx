import spriteUrl from '../../assets/icons/sprite.svg';

type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function Icon({ name, className = '', size = 24 }: IconProps) {
  return (
    <svg className={`icon ${className}`} width={size} height={size} aria-hidden="true">
      <use href={`${spriteUrl}#${name}`} />
    </svg>
  );
}
