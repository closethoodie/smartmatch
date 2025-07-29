import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import OnboardingForm from '../components/OnboardingForm.jsx';

/**
 * Onboarding page that renders the onboarding form within the dashboard
 * layout.  The form is centred horizontally and vertically (on medium
 * screens and larger) to focus attention on the signup process.
 */
export default function OnboardingPage() {
  return (
    <DashboardLayout>
      <div className="col-span-full flex justify-center items-start md:items-center w-full h-full">
        <OnboardingForm />
      </div>
    </DashboardLayout>
  );
}