
import React from "react";
import ConnectForm from "../forms/ConnectForm";
import SubscribeForm from "../forms/SubscribeForm";
import SendForm from "../forms/SendForm";

export default function ControlsPane() {
    return (
        <div className="flex flex-column gap-3">
            <ConnectForm />
            <SubscribeForm />
            <SendForm />
        </div>
    )
}