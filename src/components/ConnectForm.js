import React, { } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function ConnectForm() {
    return (
        <Panel header="Connect" toggleable>
            <div className="flex flex-column gap-2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="endpoint">Endpoint</label>
                    <InputText
                        id="endpoint"
                        name="endpoint"
                        placeholder="ws://localhost:8080/websocket"
                        onFocus={(e) => e.target.select()}
                    />
                    <small className="p-error">error</small>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="headers">Headers</label>
                    <InputTextarea
                        id="headers"
                        name="headers"
                        autoResize="false"
                        className="w-full"
                    />
                    <small className="p-error">error</small>
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