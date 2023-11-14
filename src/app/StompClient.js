import React, { createContext } from 'react';

import { Client } from '@stomp/stompjs';
import PropTypes from 'prop-types';

const StompClientContext = createContext(null);

export { StompClientContext };

function StompClient({ children }) {
  let client;
  let ws;

  const sendMessage = ({topic, message}) => {
    console.log(`Sending message: ${topic} - ${message}`);
    client.publish({
        destination: topic,
        body: JSON.stringify(message)
    })
  };

  if (!client) {
    
    client = new Client({
        brokerURL: 'ws://localhost:8080/gs-guide-websocket',
        debug: console.log
    });

    client.onConnect = (frame) => {
        console.log('Connected', frame)
        client.subscribe('/topic/greetings', (greeting) => {
            console.log('Received', JSON.parse(greeting.body).content);
        });
    }

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
