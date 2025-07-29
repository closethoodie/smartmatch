import React from 'react';

/**
 * Card component stub.
 *
 * A generic container used throughout the app for match previews and summaries.
 * Accepts optional className, children and onClick props. Replace the
 * placeholder content with your actual implementation.
 */
export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={
        `bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow ` +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}
