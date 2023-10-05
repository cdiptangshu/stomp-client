import React, { } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { Badge } from 'primereact/badge';

export default function ConnectForm() {
    const getHeader = () => {
        return (
            <span><i className="pi pi-link p-overlay-badge"><Badge severity="success" /></i>&nbsp;Connect</span>
        );
    };

    return (
        <Panel header={getHeader()} toggleable>
            <div className="flex flex-column gap-2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="endpoint">Endpoint</label>
                    <InputText
                        id="endpoint"
                        name="endpoint"
                        placeholder="ws://localhost:8080/websocket"
                        onFocus={(e) => e.target.select()}
                    />
                    <small className="p-error">Errors</small>
                </div>
                <div className="flex flex-column gap-2">
                    <span>Headers</span>
                    <CodeMirror
                        name="headers"
                        extensions={[json()]}
                        className="border-1 surface-border"
                    />
                    <small className="p-error">Errors</small>
                </div>
                <div className="flex flex-row justify-content-center gap-2">
                    <Button
                        label="Connect"
                        className="flex-1"
                    />
                    <Button
                        label="Disconnect"
                        severity="secondary"
                        className="flex-1"
                    />
                </div>
            </div>

        </Panel>
    )
}