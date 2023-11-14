import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ToggleButton } from 'primereact/togglebutton';
import PropTypes from 'prop-types';
import validator from 'validator';

import { REGEX_TOPIC } from './constants';

function SubscribeTopic({ topic, onSubscribe, onDelete }) {
  const [path, setPath] = useState(topic.path);

  const isValid = () => validator.matches(path, REGEX_TOPIC);

  const name = `path-${topic.id}`;

  const handleSubscribe = (e) => {
    if (!isValid()) return;

    onSubscribe({ id: topic.id, path, subscribed: e.target.value });
  };

  return (
    <div className="flex flex-row justify-content-center gap-1">
      <InputText
        name={name}
        value={path}
        onChange={(e) => setPath(e.target.value)}
        readOnly={topic.subscribed}
        placeholder="/topic/greetings"
        className="w-full"
        onFocus={(e) => e.target.select()}
      />
      <span className="p-buttonset flex">
        <ToggleButton
          title="Subscribe"
          onLabel=""
          offLabel=""
          onIcon="pi pi-paperclip"
          offIcon="pi pi-paperclip"
          checked={topic.subscribed}
          disabled={!isValid()}
          onChange={handleSubscribe}
        />
        <Button
          icon="pi pi-trash"
          severity="secondary"
          outlined
          title="Remove"
          onClick={() => onDelete(topic)}
        />
      </span>
    </div>
  );
}

SubscribeTopic.defaultProps = {
  topic: { id: '0', path: '', subscribed: false }
};

SubscribeTopic.propTypes = {
  topic: PropTypes.object,
  onSubscribe: PropTypes.func,
  onDelete: PropTypes.func
};

export default SubscribeTopic;
