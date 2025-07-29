import React from 'react';

/**
 * Select & Filter controls stub.
 *
 * Used for dropdowns, radio groups, sliders and checkboxes in onboarding
 * and match filtering. For now, it simply renders its name; replace with
 * appropriate form controls and state management when implementing.
 */
export default function SelectFilter({ className = '', children, onClick }) {
  return (
    <div className={`p-2 border ${className}`} onClick={onClick}>
      <span className="font-heading text-primary">SelectFilter</span>
      {children}
    </div>
  );
}