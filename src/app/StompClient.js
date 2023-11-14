import React, { createContext, useEffect, useState } from 'react';

import { Client } from '@stomp/stompjs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { send } from './publishing-slice';
import { log } from './responses-slice';
import { useToast } from './ToastProvider';

const StompClientContext = createContext(null);

export { StompClientContext };

function StompClient({ children }) {
  const [client, setClient] = useState(undefined);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const url = 'ws://localhost:8080/gs-guide-websocket';

  useEffect(() => {
    const _client = new Client({
      brokerURL: url,
      debug: console.log
    });

    _client.onConnect = (frame) => {
      console.log('Connected', frame);
      _client.subscribe('/topic/greetings', (payload) => {
        dispatch(
          log({
            headers: payload.headers,
            body: payload.body
          })
        );
      });
    };

    _client.onWebSocketClose = () => {
      setClient(undefined);
    };

    setClient(_client);

    _client.activate();

    return () => {
      _client.deactivate();
    };
  }, [url]);

  const sendMessage = ({ topic, message }) => {
    client.publish({
      destination: topic,
      body: message
    });
    dispatch(send({ topic, message }));
    showToast({ severity: 'info', summary: 'Sent message', detail: `Topic: ${topic}` });
  };

  return (
    <StompClientContext.Provider value={{ client, sendMessage }}>
      {children}
    </StompClientContext.Provider>
  );
}

StompClient.propTypes = {
  children: PropTypes.any
};

export default StompClient;
