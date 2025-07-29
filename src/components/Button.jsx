import React from 'react';

/**
 * Button stub component.
 *
 * Represents primary, secondary and tertiary buttons. Accepts an onClick
 * handler along with className and children. This stub simply displays
 * the component name and forwards events to onClick.
 */
export default function Button({ className = '', children = 'Button', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        `px-4 py-2 rounded text-white font-heading bg-primary ` +
        `hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 ` +
        className
      }
    >
      {children}
    </button>
  );
}