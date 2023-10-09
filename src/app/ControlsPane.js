import React from 'react';

import { useSelector } from 'react-redux';

import ConnectForm from './ConnectForm';
import SendForm from './SendForm';
import SubscribeForm from './SubscribeForm';

export default function ControlsPane() {
  const connected = useSelector((state) => state.connection.connected);
  return (
    <div className="flex flex-column gap-3">
      <ConnectForm />
      <SubscribeForm disabled={!connected} />
      <SendForm disabled={!connected} />
    </div>
  );
}
