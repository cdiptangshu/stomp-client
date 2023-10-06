import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ToggleButton } from 'primereact/togglebutton';
import PropTypes from 'prop-types';
import validator from 'validator';

import { REGEX_TOPIC } from '../common';

function SubscribeItem({ itemId, onDelete, allowDelete = true }) {
  const [topic, setTopic] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const isValid = () => validator.matches(topic, REGEX_TOPIC);

  const name = `subscribe-topic-${itemId}`;

  const onChangeSubscribe = (e) => {
    if (!isValid()) return;

    setSubscribed(e.target.value);
  };

  return (
    <div className="flex flex-row justify-content-center gap-1">
      <InputText
        id={name}
        name={name}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        readOnly={subscribed}
        placeholder="/topic/greetings"
        className="w-full"
        onFocus={(e) => e.target.select()}
      />
      <span className="p-buttonset flex">
        <ToggleButton
          title="Subscribe"
          onLabel=""
          offLabel=""
          onIcon="pi pi-bell"
          offIcon="pi pi-bell"
          checked={subscribed}
          disabled={!isValid()}
          onChange={onChangeSubscribe}
        />
        <Button
          icon="pi pi-trash"
          severity="secondary"
          outlined
          title="Remove"
          onClick={() => onDelete(itemId)}
          disabled={!allowDelete}
        />
      </span>
    </div>
  );
}

SubscribeItem.propTypes = {
  itemId: PropTypes.number,
  onDelete: PropTypes.func,
  allowDelete: PropTypes.bool
};

export default SubscribeItem;
