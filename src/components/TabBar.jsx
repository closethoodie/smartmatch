import React from 'react';
import { Home, MessageSquare, User } from 'lucide-react';

/**
 * TabBar / Navigation stub component.
 *
 * Provides persistent navigation between core sections (Feed, Messages,
 * Profile). Replace this with a proper navigation component when building
 * the real application.
 */

export default function TabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 flex justify-around py-2 sm:hidden">
      <button className="flex flex-col items-center text-neutral-500 hover:text-primary">
        <Home size={24} />
        <span className="text-xs">Feed</span>
      </button>
      <button className="flex flex-col items-center text-neutral-500 hover:text-primary">
        <MessageSquare size={24} />
        <span className="text-xs">Messages</span>
      </button>
      <button className="flex flex-col items-center text-neutral-500 hover:text-primary">
        <User size={24} />
        <span className="text-xs">Profile</span>
      </button>
    </nav>
  );
}
