import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

/**
 * Dashboard page showcasing the feed layout.
 *
 * Two sample cards demonstrate how match previews might look.  One card
 * contains a button to illustrate interactive elements within cards.
 */
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Card className="mb-4">
        <h2 className="font-semibold text-lg text-primary uppercase tracking-wide">CARD</h2>
        <p>Left column content</p>
        <div className="mt-4">
          <Button>View Profile</Button>
        </div>
      </Card>
      <Card>
        <h2 className="font-semibold text-lg text-primary uppercase tracking-wide">CARD</h2>
        <p>Right column content</p>
      </Card>
    </DashboardLayout>
  );
}