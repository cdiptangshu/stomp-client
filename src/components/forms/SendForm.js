import React from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

export default function SendForm() {
    return (
        <Panel header="Send" toggleable>
            <div className="flex flex-column gap-2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="topic">Topic</label>
                    <InputText
                        id="topic"
                        name="topic"
                        placeholder="/app/hello"
                        onFocus={(e) => e.target.select()}
                    />
                    <small className="p-error">Errors</small>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="message">Message</label>
                    <CodeMirror
                        id="message"
                        name="message"
                        extensions={[json()]}
                        className="border-1 surface-border"
                    />
                    <small className="p-error">Errors</small>
                </div>
                <Button label="Send" icon="pi pi-send" />
            </div>
        </Panel>
    );
}