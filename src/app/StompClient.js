import React, { createContext } from 'react';

import { Client } from '@stomp/stompjs';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { send } from './publishing-slice';
import { log } from './responses-slice';
import { useToast } from './ToastProvider';

const StompClientContext = createContext(null);

export { StompClientContext };

function StompClient({ children }) {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  let client;
  let ws;

  const sendMessage = ({ topic, message }) => {
    client.publish({
      destination: topic,
      body: message
    });
    dispatch(send({ topic, message }));
    showToast({ severity: 'info', summary: 'Sent message', detail: `Topic: ${topic}` });
  };

  if (!client) {
    client = new Client({
      brokerURL: 'ws://localhost:8080/gs-guide-websocket',
      debug: console.log
    });

    client.onConnect = (frame) => {
      console.log('Connected', frame);
      client.subscribe('/topic/greetings', (payload) => {
        dispatch(log({
            headers: payload.headers,
            body: payload.body
        }))  
      });
    };

    client.activate();

    ws = {
      client,
      sendMessage
    };
  }

  return <StompClientContext.Provider value={ws}>{children}</StompClientContext.Provider>;
}

StompClient.propTypes = {
  children: PropTypes.any
};

export default StompClient;
