import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { StompSessionProvider } from 'react-stomp-hooks';

import { connected } from './connection-slice';
import PublishForm from './PublishForm';
import SubscribeForm from './SubscribeForm';
import { useToast } from './ToastProvider';

function StompClientWapper() {
  const { connected, endpoint } = useSelector((state) => state.connection);
  const { showToast } = useToast();
  const dispatch = useDispatch();

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
