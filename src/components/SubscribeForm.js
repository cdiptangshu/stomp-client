import React from 'react';

import { Panel } from 'primereact/panel';

import ChannelForm from './ChannelForm';

export default function SubscribeForm() {
  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-bell"></i>&nbsp;Subscribe
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        <div className="flex flex-row justify-content-center gap-1">
          <ChannelForm />
        </div>
      </div>
    </Panel>
  );
}
