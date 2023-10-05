import { Card } from "primereact/card";
import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { DataScroller } from 'primereact/datascroller';
import './MessagesPane.css';
import { Button } from "primereact/button";
import { Badge } from 'primereact/badge';

export default function MessagesPane() {

    const results = [...Array(10).keys()];

    const data = {
        name: {
            first: "Diptangshu",
            last: "Chakrabarty"
        },
        roll: 124,
        subjects: ["Maths", "Physics", "Bengali"]
    };
    const code = JSON.stringify(data, null, 2);

    const getHeader = () => {
        return (
            <div className="flex justify-content-between flex-wrap align-items-center">
                <span>
                    <i className="pi pi-envelope"></i>&nbsp;Messages&nbsp;
                    <Badge value={results.length}/>
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
                        <span className="message-time">{(new Date().toISOString())}</span>
                    </div>
                    <Button
                        icon="pi pi-copy"
                        severity="secondary"
                        text
                        size="small"
                        title="Copy"
                        aria-label="copy"
                    />
                </div>
                <CodeMirror
                    name="results"
                    value={code}
                    extensions={[json()]}
                    editable={false}
                    className="border-1 surface-border"
                />
            </div>
        );
    };

    return (
        <div className="card">
            <Card>
                <DataScroller
                    value={results}
                    itemTemplate={itemTemplate}
                    rows={5}
                    inline
                    header={getHeader()}
                    emptyMessage="No messages received."
                    className="border-1 surface-border"
                    scrollHeight="80vh"
                />
            </Card>
        </div>
    );
}