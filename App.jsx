import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './src/pages/OnboardingPage.jsx';
import DashboardPage from './src/pages/DashboardPage.jsx';

/**
 * Application entry point with client side routing.
 *
 * Defines two routes: the root path renders the Onboarding page and
 * `/dashboard` renders the dashboard page.  Unknown paths redirect to
 * onboarding.  BrowserRouter is used rather than HashRouter to
 * maintain clean URLs.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Fallback to onboarding for any other route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}