import React from 'react';

import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';

export default function SendForm() {
  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-send"></i>&nbsp;Send
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        <div className="flex flex-column gap-2">
          <label htmlFor="send-topic">Topic</label>
          <InputText
            id="send-topic"
            name="send-topic"
            placeholder="/app/hello"
            onFocus={(e) => e.target.select()}
          />
          <small className="p-error">Errors</small>
        </div>
        <div className="flex flex-column gap-2">
          <span>Message</span>
          <CodeMirror name="message" extensions={[json()]} className="border-1 surface-border" />
          <small className="p-error">Errors</small>
        </div>
        <Button label="Send" />
      </div>
    </Panel>
  );
}
