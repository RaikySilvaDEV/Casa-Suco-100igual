import React from 'react';

interface FruitProps {
  className?: string;
  size?: number;
}

export const OrangeSlice: React.FC<FruitProps> = ({ className = '', size = 120 }) => {
  return (
    <img
      src="/orange_slice.png"
      width={size}
      height={size}
      alt="Orange Slice"
      className={`select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(255,122,0,0.35)] ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      loading="lazy"
    />
  );
};

export const Strawberry: React.FC<FruitProps> = ({ className = '', size = 100 }) => {
  return (
    <img
      src="/strawberry.png"
      width={size}
      height={size}
      alt="Strawberry"
      className={`select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(220,38,38,0.35)] ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      loading="lazy"
    />
  );
};

export const LimeSlice: React.FC<FruitProps> = ({ className = '', size = 80 }) => {
  return (
    <img
      src="/lime_slice.png"
      width={size}
      height={size}
      alt="Lime Slice"
      className={`select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(34,197,94,0.35)] ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      loading="lazy"
    />
  );
};

export const AcaiBerry: React.FC<FruitProps> = ({ className = '', size = 90 }) => {
  return (
    <img
      src="/acai_berries.png"
      width={size}
      height={size}
      alt="Acai Berries"
      className={`select-none pointer-events-none filter drop-shadow-[0_12px_24px_rgba(88,28,135,0.45)] ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
      loading="lazy"
    />
  );
};
