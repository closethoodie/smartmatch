import React from 'react';
import TabBar from '../components/TabBar.jsx';

/**
 * Upgraded DashboardLayout:
 * - Vibrant gradient header with logo and subtle background blur.
 * - Navigation links use accent color and interactive states.
 * - Main grid with extra padding and background fade.
 */
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-body bg-neutralLight">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-accent to-secondary text-white p-6 flex justify-between items-center shadow-md backdrop-blur-md">
        <h1 className="font-heading text-2xl tracking-wide drop-shadow-lg">SmartMatch</h1>
        <nav className="space-x-6 hidden sm:block">
          <a href="#" className="hover:text-accent transition-colors">Feed</a>
          <a href="#" className="hover:text-accent transition-colors">Messages</a>
          <a href="#" className="hover:text-accent transition-colors">Profile</a>
        </nav>
      </header>
      {/* Main content area */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-tr from-neutralLight via-white to-neutralLight">
        {children}
      </main>
      {/* Mobile bottom navigation bar */}
      <TabBar />
    </div>
  );
}