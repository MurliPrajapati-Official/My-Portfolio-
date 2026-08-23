import React from 'react';

interface LiveProjectButtonProps {
  id?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  id = 'live-project-btn',
  onClick,
  href,
  className = '',
  label = 'Live Project',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20
    transition-all duration-200 cursor-pointer select-none whitespace-nowrap
    ${className}
  `;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={baseClasses}
    >
      {label}
    </button>
  );
};
