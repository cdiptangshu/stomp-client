
import React from "react";
import { Card } from 'primereact/card';
import ConnectForm from "../forms/ConnectForm";
import SubscribeForm from "../forms/SubscribeForm";
import SendForm from "../forms/SendForm";

export default function ControlsPane() {
    return (
        <div className="card">
            <Card>
                <div className="flex flex-column gap-3">
                    <ConnectForm />
                    <SubscribeForm />
                    <SendForm />
                </div>
            </Card>
        </div>
    )
}