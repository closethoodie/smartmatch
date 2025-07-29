import React from 'react';

/**
 * Select & filter control component.
 *
 * Wraps a standard `<select>` element with a label.  Options should be
 * provided as an array of objects with `value` and `label` properties.
 * Additional props are forwarded to the select element.
 */
export default function SelectFilter({
  label,
  options = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="font-heading text-sm text-neutralDark">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}