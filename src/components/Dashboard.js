import React from "react";
import ControlsPane from './panes/ControlsPane';
import MessagesPane from './panes/MessagesPane';
import { Card } from 'primereact/card';

export default function Dashboard() {
    return (
        <Card>
        <div className="md:flex gap-3">
          <div className="mb-3 md:w-4">
            <ControlsPane />
          </div>
          <div className="mb-3 md:flex-1">
            <MessagesPane />
          </div>
        </div>
      </Card>
    );
}