import React, { useContext } from 'react';

import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { useSelector, useDispatch } from 'react-redux';

import { StompClientContext } from './StompClient';
import SubscribeTopic from './SubscribeTopic';
import { add, subscribe, remove } from './subscription-slice';
import { useToast } from './ToastProvider';

function SubscribeForm() {
  const topics = useSelector((state) => state.subscription.topics);
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const stompClient = useContext(StompClientContext);

  const handleAdd = () => {
    dispatch(add());
  };

  const handleSubscribe = (topic) => {
    dispatch(subscribe(topic));
    const summary = topic.subscribed ? 'Subscribed' : 'Unsubscribed';
    showToast({ severity: 'info', summary: summary, detail: `Topic: ${topic.path}` });
    stompClient.subscribe(topic);
  };

  const handleDelete = (topic) => {
    stompClient.subscribe({
      id: topic.id,
      path: topic.path,
      subscribed: false
    });
    showToast({ severity: 'info', summary: 'Unsubscribed', detail: `Topic: ${topic.path}` });
    dispatch(remove(topic.id));
  };

  const subscribeTopics = topics.map((topic) => (
    <SubscribeTopic
      key={topic.id}
      topic={topic}
      onSubscribe={handleSubscribe}
      onDelete={handleDelete}
    />
  ));

  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-paperclip"></i>&nbsp;Subscribe
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        {subscribeTopics}
        <Button icon="pi pi-plus" label="Add Topic" onClick={handleAdd} />
      </div>
    </Panel>
  );
}

export default SubscribeForm;
