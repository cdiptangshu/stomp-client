import React from 'react';

import { Card } from 'primereact/card';

import ConnectForm from './ConnectForm';
import ResponsesPane from './ResponsesPane';
import StompClientWapper from './StompClientWrapper';

export default function Dashboard() {
  return (
    <Card>
      <div className="md:flex gap-3">
        <div className="mb-3 md:w-4">
          <div className="flex flex-column gap-3">
            <ConnectForm />
            <StompClientWapper />
          </div>
        </div>
        <div className="mb-3 md:flex-1">
          <ResponsesPane />
        </div>
      </div>
    </Card>
  );
}
