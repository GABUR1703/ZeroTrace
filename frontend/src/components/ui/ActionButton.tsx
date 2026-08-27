import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function ActionButton({ children, icon, variant = 'primary', className = '', ...props }: ActionButtonProps) {
  return (
    <button className={`action-button action-button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={20} />}
    </button>
  );
}
