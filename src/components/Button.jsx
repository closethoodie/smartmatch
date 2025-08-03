import React from 'react';

/**
 * Upgraded Button component:
 * - Bold primary color with gradient and deeper shadow.
 * - Smooth scale and color transition on hover/focus.
 * - Rounded pill shape and large, readable font.
 */
export default function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      className={`bg-gradient-to-r from-primary via-secondary to-accent text-white font-heading px-6 py-2 rounded-full shadow-md transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}