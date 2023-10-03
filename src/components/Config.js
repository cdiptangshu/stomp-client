
import React from "react";
import { Card } from 'primereact/card';
import Connect from "./Connect";
import Subscribe from "./Subscribe";
import Send from "./Send";

export default function Config() {
    return (
        <div className="card">
            <Card title="Config">
                <div className="grid">
                    <div className="col-12">
                        <Connect />
                    </div>
                    <div className="col-12">
                        <Subscribe />
                    </div>
                    <div className="col-12">
                        <Send />
                    </div>
                </div>
            </Card>
        </div>
    )
}