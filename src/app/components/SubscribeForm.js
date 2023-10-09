import React from 'react';

import { Panel } from 'primereact/panel';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import SubscribeTopic from './SubscribeTopic';
import { remove } from '../data/slices/subscriptionSlice';

function SubscribeForm({ disabled }) {
  const topics = useSelector((state) => state.subscription.topics);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  const subscribeTopics = topics.map((topic) => (
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

  if (disabled) {
    return null;
  }

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">{subscribeTopics}</div>
    </Panel>
  );
}

SubscribeForm.propTypes = {
  disabled: PropTypes.bool
};

export default SubscribeForm;
