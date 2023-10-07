import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { Panel } from 'primereact/panel';

import SubscribeTopic from './SubscribeTopic';

export default function SubscribeForm() {
  const [topics, setTopics] = useState([
    { id: nanoid(), path: '/topic/0', enabled: true },
    { id: nanoid(), path: '/topic/1', enabled: false },
    { id: nanoid(), path: '/topic/2', enabled: true }
  ]);

  const handleDelete = (id) => {
    setTopics(topics.filter((topic) => topic.id !== id));
  };

  const subscribeItems = topics.map((topic) => (
    <SubscribeTopic
      key={topic.id}
      topic={topic}
      allowDelete={topics.length > 1}
      onDelete={handleDelete}
    />
  ));

  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-bell"></i>&nbsp;Subscribe
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">{subscribeItems}</div>
    </Panel>
  );
}
