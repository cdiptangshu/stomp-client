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
                <div className="flex flex-row justify-content-center gap-2">
                    <InputText
                        id="topic"
                        name="topic"
                        placeholder="/topic/greetings"
                        className="w-full"
                    />
                    <ToggleButton
                        onLabel=""
                        offLabel=""
                        onIcon="pi pi-bell"
                        offIcon="pi pi-bell"
                        checked={checked}
                        onChange={(e) => { setChecked(e.value) }}
                        className="w-1"
                    />
                    <Button
                        icon="pi pi-trash"
                        severity="danger"
                        className="w-1"
                    />
                </div>                
            </div>
        </Panel>
    )
}