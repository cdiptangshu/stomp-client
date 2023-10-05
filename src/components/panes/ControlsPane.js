import React from 'react';

import ConnectForm from '../forms/ConnectForm';
import SendForm from '../forms/SendForm';
import SubscribeForm from '../forms/SubscribeForm';

export default function ControlsPane() {
  return (
    <div className="flex flex-column gap-3">
      <ConnectForm />
      <SubscribeForm />
      <SendForm />
    </div>
  );
}
