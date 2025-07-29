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
      <Card>Sample match card #1</Card>
      <Card>
        <div className="space-y-2">
          <p>Sample match card #2 with action</p>
          <Button onClick={() => {}}>View Profile</Button>
        </div>
      </Card>
    </DashboardLayout>
  );
}