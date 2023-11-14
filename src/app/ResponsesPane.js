import React from 'react';

import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { useSelector, useDispatch } from 'react-redux';

import ClipboardCopy from './ClipboardCopy';
import CodeEditor from './CodeEditor';
import { clear } from './responses-slice';
import './ResponsesPane.css';

export default function ResponsesPane() {
  const results = useSelector((state) => state.responses.messages);
  const dispatch = useDispatch();

  const getCount = () => (results.length > 1 ? <Badge value={results.length} /> : null);

  const getHeader = () => {
    return (
      <div className="flex justify-content-between flex-wrap align-items-center">
        <span>Responses&nbsp;{getCount()}</span>
        <Button
          icon="pi pi-trash"
          severity="secondary"
          outlined
          title="Clear"
          aria-label="clear"
          onClick={handleClear}
        />
      </div>
    );
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const itemTemplate = ({headers, body, timestamp}) => {
    const formattedTimestamp = new Date(timestamp).toISOString();
    const isJson = headers['content-type'] === 'application/json'
    const jsonString = isJson ? JSON.stringify(JSON.parse(body), null, 2) : body;

    return (
      <div className="flex flex-column gap-1 p-2 m-1">
        <div className="flex justify-content-between flex-wrap align-items-center">
          <div className="text-sm text-color-secondary">
            <span className="message-topic">{headers.destination}</span>
            <span className="message-time">{formattedTimestamp}</span>
          </div>
          <ClipboardCopy copyText={jsonString} />
        </div>
        <CodeEditor value={jsonString} editable={false} />
      </div>
    );
  };

  const getEmptyMessage = () => {
    return <div className="text-color-secondary p-2">Nothing to display.</div>;
  };

  return (
    <DataScroller
      value={results}
      itemTemplate={itemTemplate}
      rows={10}
      inline
      header={getHeader()}
      emptyMessage={getEmptyMessage()}
      className="border-1 surface-border"
      scrollHeight="80vh"
    />
  );
}
