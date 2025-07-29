import React from 'react';
import DashboardLayout from './src/layouts/DashboardLayout.jsx';
import Card from './src/components/Card.jsx';
import Button from './src/components/Button.jsx';

export default function App() {
  return (
    <DashboardLayout>
      {/* ← nothing else should be here */}
      <Card className="mb-4">
        <h2 className="font-semibold text-lg text-primary uppercase tracking-wide">Card</h2>
        <p>Left column content</p>
        <div className="mt-4">
          <Button>View Profile</Button>
        </div>
      </Card>
      <Card>
        <h2 className="font-semibold text-lg text-primary uppercase tracking-wide">Card</h2>
        <p>Right column content</p>
      </Card>
    </DashboardLayout>
  );
}
