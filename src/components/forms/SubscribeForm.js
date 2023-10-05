import React, { useState } from "react";
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';


export default function SubscribeForm() {
    const [checked, setChecked] = useState(false);

    return (
        <Panel header="Subscribe" toggleable>
            <div className="flex flex-column gap-2">
                <div className="flex flex-row justify-content-center gap-1">
                    <InputText
                        id="subscribe-topic"
                        name="subscribe-topic"
                        placeholder="/topic/greetings"
                        className="w-full"
                    />
                    <div className="p-buttonset flex">
                        <ToggleButton
                            onLabel=""
                            offLabel=""
                            onIcon="pi pi-bell"
                            offIcon="pi pi-bell"
                            checked={checked}
                            onChange={(e) => { setChecked(e.value) }}
                        />
                        <Button
                            icon="pi pi-trash"
                            severity="secondary"
                        />
                    </div>
                </div>
            </div>
        </Panel>
    )
}