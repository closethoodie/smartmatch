import React from 'react';

/**
 * Form input stub component.
 *
 * Represents text, number or password fields in forms. Currently renders a
 * placeholder div with its name. Extend this stub with real input elements
 * and validation logic as the project evolves.
 */
export default function FormInput({ className = '', children, onClick }) {
  return (
    <div className={`p-2 border ${className}`} onClick={onClick}>
      <span className="font-heading text-primary">FormInput</span>
      {children}
    </div>
  );
}