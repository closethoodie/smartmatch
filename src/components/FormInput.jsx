import React, { useState } from 'react';

/**
 * Reusable form input component.
 *
 * Supports text, number and password input types.  When the type is
 * `password`, a show/hide toggle is rendered.  Validation errors can be
 * passed via the `error` prop and will display below the input.  All
 * additional props are forwarded to the underlying `<input>` element.
 */
export default function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  error,
  className = '',
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="font-heading text-sm text-neutralDark">{label}</label>}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
          {...rest}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-neutralDark"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}