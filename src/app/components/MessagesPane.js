import React from 'react';

import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';

import './MessagesPane.css';
import CodeEditor from './CodeEditor';

export default function MessagesPane() {
  const results = [...Array(10).keys()];

  const data = {
    name: {
      first: 'Diptangshu',
      last: 'Chakrabarty'
    },
    roll: 124,
    subjects: ['Maths', 'Physics', 'Bengali']
  };
  const code = JSON.stringify(data, null, 2);

  const getHeader = () => {
    return (
      <div className="flex justify-content-between flex-wrap align-items-center">
        <span>
          <i className="pi pi-envelope"></i>&nbsp;Messages&nbsp;
          <Badge value={results.length} />
        </span>
        <Button
          icon="pi pi-trash"
          severity="secondary"
          outlined
          size="small"
          title="Clear"
          aria-label="clear"
        />
      </div>
    );
  };

  const itemTemplate = () => {
    return (
      <div className="flex flex-column gap-1 p-2 m-1">
        <div className="flex justify-content-between flex-wrap align-items-center">
          <div className="text-sm text-color-secondary">
            <span className="message-topic">/app/hello</span>
            <span className="message-time">{new Date().toISOString()}</span>
          </div>
          <Button icon="pi pi-copy" severity="secondary" text title="Copy" aria-label="copy" />
        </div>
        <CodeEditor value={code} editable={false} />
      </div>
    );
  };

  const getEmptyMessage = () => {
    return <div className="text-color-secondary p-2">No messages received.</div>;
  };

  return (
    <DataScroller
      value={results}
      itemTemplate={itemTemplate}
      rows={5}
      inline
      header={getHeader()}
      emptyMessage={getEmptyMessage()}
      className="border-1 surface-border"
      scrollHeight="80vh"
    />
  );
}
