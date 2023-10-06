import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ToggleButton } from 'primereact/togglebutton';

export default function ChannelForm() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <InputText
        id="subscribe-topic"
        name="subscribe-topic"
        placeholder="/topic/greetings"
        className="w-full"
      />
      <span className="p-buttonset flex">
        <ToggleButton
          onLabel=""
          offLabel=""
          onIcon="pi pi-bell"
          offIcon="pi pi-bell"
          checked={checked}
          onChange={(e) => {
            setChecked(e.value);
          }}
          title="Subscribe"
        />
        <Button icon="pi pi-trash" severity="secondary" outlined title="Remove" />
      </span>
    </>
  );
}
