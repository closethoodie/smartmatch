import React from 'react';
import TabBar from '../components/TabBar.jsx';

/**
 * DashboardLayout provides a basic responsive container for the main
 * application views. It includes a header with a logo and simple navigation
 * links and then renders its children in a two‑column grid on larger
 * screens. On small screens the layout collapses to a single column.
 *
 * This layout applies the primary colour for the header background and uses
 * the heading/body fonts defined in the Tailwind configuration.
 */
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="font-heading text-xl">SmartMatch</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#" className="hover:underline">Feed</a>
          <a href="#" className="hover:underline">Messages</a>
          <a href="#" className="hover:underline">Profile</a>
        </nav>
      </header>
      {/* Main content area */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {children}
      </main>
      {/* Mobile bottom navigation bar */}
      <TabBar />
    </div>
  );
}