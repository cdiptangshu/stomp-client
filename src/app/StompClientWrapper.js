import React from 'react';

import { useSelector } from 'react-redux';
import { StompSessionProvider } from 'react-stomp-hooks';

import PublishForm from './PublishForm';
import SubscribeForm from './SubscribeForm';
import { useToast } from './ToastProvider';

function StompClientWapper() {
  const { connected, endpoint } = useSelector((state) => state.connection);
  const { showToast } = useToast();

  if (!connected) return null;

  const handleConnect = () => {
    showToast({ severity: 'success', summary: 'Connected', detail: endpoint });
  };

  const handleDisconnect = () => {
    showToast({ severity: 'warn', summary: 'Disconnected', detail: endpoint });
  };

  const handleWebSocketError = (event) => {
    showToast({ severity: 'error', summary: 'WebSocket Error', detail: event.target.url });
  };

  return (
    <StompSessionProvider
      url={endpoint}
      onConnect={handleConnect}
      onDisconnect={handleDisconnect}
      onWebSocketError={handleWebSocketError}
    >
      <SubscribeForm />
      <PublishForm />
    </StompSessionProvider>
  );
}

export default StompClientWapper;
