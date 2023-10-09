import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ToggleButton } from 'primereact/togglebutton';
import PropTypes from 'prop-types';
import validator from 'validator';

import { REGEX_TOPIC } from '../constants';

function SubscribeTopic({
  topic = { id: '0', path: '', enabled: false },
  onSubscribe,
  onDelete,
  allowDelete = true
}) {
  const [path, setPath] = useState(topic.path);

  const isValid = () => validator.matches(path, REGEX_TOPIC);

  const name = `path-${topic.id}`;

  const handleSubscribe = (e) => {
    if (!isValid()) return;

    // setSubscribed(e.target.value);
    onSubscribe({ id: topic.id, path, enabled: e.target.value });

    console.log('subscribed', e.target.value, 'to topic', topic.path);
  };

  return (
    <div className="flex flex-row justify-content-center gap-1">
      <InputText
        name={name}
        value={path}
        onChange={(e) => setPath(e.target.value)}
        readOnly={topic.enabled}
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
          checked={topic.enabled}
          disabled={!isValid()}
          onChange={handleSubscribe}
        />
        <Button
          icon="pi pi-trash"
          severity="secondary"
          outlined
          title="Remove"
          onClick={() => onDelete(topic.id)}
          disabled={!allowDelete}
        />
      </span>
    </div>
  );
}

SubscribeTopic.propTypes = {
  topic: PropTypes.object,
  onSubscribe: PropTypes.func,
  onDelete: PropTypes.func,
  allowDelete: PropTypes.bool
};

export default SubscribeTopic;
