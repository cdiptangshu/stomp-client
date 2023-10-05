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
                    <CodeMirror
                        name="message"
                        extensions={[json()]}
                        className="border-1 surface-border"
                    />
                    <small className="p-error">Errors</small>
                </div>
                <Button label="Send" />
            </div>
        </Panel>
    );
}