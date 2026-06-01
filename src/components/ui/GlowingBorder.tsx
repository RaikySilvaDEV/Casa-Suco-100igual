import React from 'react';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  glowClass?: string; // custom gradient colors, e.g. "from-orangeCitrus to-greenTropical"
  active?: boolean;
}

export const GlowingBorder: React.FC<GlowingBorderProps> = ({
  children,
  className = '',
  glowClass = 'from-orangeCitrus via-orangeGold to-greenTropical',
  active = true,
}) => {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-3xl group ${className}`}>
      {/* Animated Gradient Background Border (Glow effect) */}
      {active && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${glowClass} opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]`}
        />
      )}
      
      {/* Content Body */}
      <div className="relative z-10 w-full h-full rounded-[23px] bg-darkCard overflow-hidden">
        {children}
      </div>
    </div>
  );
};
