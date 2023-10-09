import React from 'react';

import { useSelector } from 'react-redux';

import ConnectForm from './ConnectForm';
import PublishForm from './PublishForm';
import SubscribeForm from './SubscribeForm';

export default function ControlsPane() {
  const connected = useSelector((state) => state.connection.connected);
  return (
    <div className="flex flex-column gap-3">
      <ConnectForm />
      <SubscribeForm disabled={!connected} />
      <PublishForm disabled={!connected} />
    </div>
  );
}
