import React from 'react';
import { Home, MessageSquare, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

/**
 * Mobile bottom navigation bar.
 *
 * Uses lucide-react icons for the three primary sections: Feed (dashboard),
 * Messages and Profile.  The bar is fixed to the bottom of the viewport and
 * hidden on screens `sm` and wider.  Active tabs are highlighted using
 * Tailwind’s primary colour.
 */
export default function TabBar({ className = '', onClick }) {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center text-xs gap-1 ${isActive ? 'text-primary' : 'text-neutralDark'}`;

  return (
    <nav
      className={`sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 ${className}`}
      onClick={onClick}
    >
      <NavLink to="/dashboard" className={linkClass}>
        <Home size={20} />
        <span>Feed</span>
      </NavLink>
      <NavLink to="/messages" className={linkClass}>
        <MessageSquare size={20} />
        <span>Messages</span>
      </NavLink>
      <NavLink to="/profile" className={linkClass}>
        <User size={20} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}