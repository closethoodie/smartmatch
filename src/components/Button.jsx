import React from 'react';

/**
 * Button stub component.
 *
 * Represents primary, secondary and tertiary buttons. Accepts an onClick
 * handler along with className and children. This stub simply displays
 * the component name and forwards events to onClick.
 */
export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={
        `bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 ` +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
