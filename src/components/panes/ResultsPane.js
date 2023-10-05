import { Card } from "primereact/card";
import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { DataScroller } from 'primereact/datascroller';
import './ResultsPane.css';

export default function ResultsPane() {

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

    const itemTemplate = () => {
        return (
            <div className="flex flex-column gap-1 p-2 m-1">
                <div className="flex justify-content-between flex-wrap">
                    <div className="text-sm text-color-secondary">                        
                        <span className="message-time pr-2">{(new Date().toLocaleString())}</span>
                        <span className="message-topic">/app/hello</span>
                    </div>                    
                </div>
                <CodeMirror
                    id="results"
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
                    header="Messages"
                    emptyMessage="No messages received."
                    scrollHeight="600px"
                    className="border-1 surface-border"
                />
            </Card>
        </div>
    );
}