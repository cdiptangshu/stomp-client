import React from 'react';

import ConnectForm from './ConnectForm';
import SendForm from './SendForm';
import SubscribeForm from './SubscribeForm';

export default function ControlsPane() {
  return (
    <div className="flex flex-column gap-3">
      <ConnectForm />
      <SubscribeForm />
      <SendForm />
    </div>
  );
}
