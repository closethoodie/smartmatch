import React from 'react';

/**
 * Modal / Dialog stub component.
 *
 * Represents overlays for confirmations or additional information. This
 * placeholder simply displays its name within a bordered container; use a
 * portal and ARIA roles when implementing the full modal behaviour.
 */
export default function Modal({ className = '', children, onClick }) {
  return (
    <div className={`p-4 border-2 border-primary rounded ${className}`} onClick={onClick}>
      <span className="font-heading text-primary">Modal</span>
      {children}
    </div>
  );
}