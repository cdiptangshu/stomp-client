
import React from "react";
import { Card } from 'primereact/card';
import ConnectForm from "./ConnectForm";
import SubscribeForm from "./SubscribeForm";
import SendForm from "./SendForm";

export default function Config() {
    return (
        <div className="card">
            <Card title="Actions">
                <div className="flex flex-column gap-3">
                    <ConnectForm />
                    <SubscribeForm />
                    <SendForm />
                </div>
            </Card>
        </div>
    )
}