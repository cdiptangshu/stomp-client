import React, { createContext, useEffect, useState } from 'react';

import { Client } from '@stomp/stompjs';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { send } from './publishing-slice';
import { log } from './responses-slice';
import { useToast } from './ToastProvider';

const StompClientContext = createContext(null);

export { StompClientContext };

function StompClient({ children }) {
  const [client, setClient] = useState(undefined);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const topics = useSelector((state) => state.subscription.topics);
  const { endpoint, connected } = useSelector((state) => state.connection);

  const showError = () => {
    showToast({ severity: 'error', summary: 'Operation failed', detail: 'Not connected!' });
  };

  const callback = ({ headers, body }) => dispatch(log({ headers, body }));

  useEffect(() => {
    const _client = new Client({
      brokerURL: endpoint,
      debug: console.log
    });

    _client.onConnect = () => {
      showToast({ severity: 'success', summary: 'Connected', detail: endpoint });

      topics.forEach(({ id, path, subscribed }) => {
        if (!subscribed) return;

        _client.subscribe(path, callback, { id });
      });
    };

    _client.onWebSocketClose = () => {
      setClient(undefined);
    };

    _client.onWebSocketError = () => {
      showError();
    };

    setClient(_client);

    if (connected) _client.activate();

    return () => {
      _client.deactivate();
    };
  }, [endpoint, connected]);

  const sendMessage = ({ topic, message }) => {
    if (!client) {
      showError();
      return;
    }
    client.publish({
      destination: topic,
      body: message
    });
    dispatch(send({ topic, message }));
    showToast({ severity: 'info', summary: 'Sent message', detail: `Topic: ${topic}` });
  };

  const subscribe = (topic) => {
    const { id, path, subscribed } = topic;
    if (!client) {
      showError();
      return;
    }

    if (subscribed) {
      client.subscribe(path, callback, { id });
    } else {
      client.unsubscribe(id);
    }
  };

  return (
    <StompClientContext.Provider value={{ client, sendMessage, subscribe }}>
      {children}
    </StompClientContext.Provider>
  );
}

StompClient.propTypes = {
  children: PropTypes.any
};

export default StompClient;
