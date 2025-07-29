import React from 'react';

/**
 * Progress indicator stub.
 *
 * Communicates onboarding completion status (e.g., linear progress bar or
 * stepper). Currently renders its name only; implement visual feedback
 * according to the design system later.
 */
export default function ProgressIndicator({ className = '', children, onClick }) {
  return (
    <div className={`p-2 border ${className}`} onClick={onClick}>
      <span className="font-heading text-primary">ProgressIndicator</span>
      {children}
    </div>
  );
}