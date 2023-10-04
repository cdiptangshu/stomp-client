import { Card } from "primereact/card";
import React from "react";
import JSONPretty from "react-json-pretty";

export default function ResultsPane() {
    const data = {
        "name": {
            "first": "Diptangshu",
            "last": "Chakrabarty"
        },
        "roll": 124,
        "subjects": ["Maths", "Physics", "Bengali"]
    };

    return (
        <div className="card">
            <Card title="Results">
                <JSONPretty id="json-pretty" data={data} mainStyle="background: var(--surface-card)"/>
            </Card>
        </div>        
    );
}