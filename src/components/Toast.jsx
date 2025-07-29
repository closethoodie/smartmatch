import React from 'react';

/**
 * Toast / Snackbar stub component.
 *
 * Brief messages that appear to confirm actions or show errors. This
 * stub just renders its name; extend with auto‑dismiss behaviour,
 * positioning and styling when implementing.
 */
export default function Toast({ className = '', children, onClick }) {
  return (
    <div className={`p-2 border bg-accent text-white rounded ${className}`} onClick={onClick}>
      <span className="font-heading">Toast</span>
      {children}
    </div>
  );
}