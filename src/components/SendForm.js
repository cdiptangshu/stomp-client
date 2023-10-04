import React from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

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
                    <small className="p-error">error</small>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="message">Message</label>
                    <InputTextarea
                        id="message"
                        name="message"
                        autoResize="false"
                        className="w-full"
                    />
                    <small className="p-error">error</small>
                </div>
                <Button label="Send" icon="pi pi-send" />
            </div>
        </Panel>
    );
}