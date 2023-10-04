import { Card } from "primereact/card";
import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

export default function ResultsPane() {
    const data = {
        name: {
            first: "Diptangshu",
            last: "Chakrabarty"
        },
        roll: 124,
        subjects: ["Maths", "Physics", "Bengali"]
    };
    const code = JSON.stringify(data, null, 2);

    return (
        <div className="card">
            <Card title="Results">                
                <div className="flex flex-column gap-1">
                    <div className="flex justify-content-between flex-wrap">
                        <small className="font-semibold">/app/hello</small>
                        <small className="text-color-secondary">{(new Date().toLocaleString())}</small>
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
            </Card>
        </div>
    );
}