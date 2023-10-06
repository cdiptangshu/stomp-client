import React, { useState } from 'react';

import { Panel } from 'primereact/panel';

import SubscribeItem from './SubscribeItem';

export default function SubscribeForm() {
  const [topics, setTopics] = useState([1, 1, 1, 1]);

  const handleDelete = (index) => {
    setTopics(topics.filter((_, i) => i !== index));
  };

  const items = topics.map((_, i) => (
    <SubscribeItem key={i} itemId={i} allowDelete={topics.length > 1} onDelete={handleDelete} />
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
      <div className="flex flex-column gap-2">{items}</div>
    </Panel>
  );
}
