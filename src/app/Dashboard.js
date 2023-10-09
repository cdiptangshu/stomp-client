import React from 'react';

import { Card } from 'primereact/card';

import ControlsPane from './ControlsPane';
import ResponsesPane from './ResponsesPane';

export default function Dashboard() {
  return (
    <Card>
      <div className="md:flex gap-3">
        <div className="mb-3 md:w-4">
          <ControlsPane />
        </div>
        <div className="mb-3 md:flex-1">
          <ResponsesPane />
        </div>
      </div>
    </Card>
  );
}
