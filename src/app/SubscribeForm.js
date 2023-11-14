import React, { useContext } from 'react';

import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { useSelector, useDispatch } from 'react-redux';

import { StompClientContext } from './StompClient';
import SubscribeTopic from './SubscribeTopic';
import { add, subscribe, remove } from './subscription-slice';

function SubscribeForm() {
  const topics = useSelector((state) => state.subscription.topics);
  const dispatch = useDispatch();
  const stompClient = useContext(StompClientContext);

  const handleAdd = () => {
    dispatch(add());
  };

  const handleSubscribe = (topic) => {
    stompClient.subscribeTopic(topic);
    dispatch(subscribe(topic));
  };

  const handleDelete = (topic) => {
    stompClient.subscribeTopic({
      id: topic.id,
      path: topic.path,
      subscribed: false
    });
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
