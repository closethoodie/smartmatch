import React from 'react';

/**
 * Upgraded Card component:
 * - Soft drop shadow, border, and gradient background.
 * - Rounded corners and smooth transition on hover.
 * - Uses semantic colors from Tailwind config.
 */
export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-gradient-to-br from-neutralLight via-white to-neutralLight border border-neutralDark/10 shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 ${className}`}
    >
      {children}
    </div>
  );
}