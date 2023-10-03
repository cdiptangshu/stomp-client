
import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
// import { ToggleButton } from 'primereact/togglebutton';
import { Toast } from 'primereact/toast';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';

export default function Connect() {
    // const [connected, setConnected] = useState(false);
    // const [checked, setChecked] = useState(false);
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.endpoint });
    };

    const formik = useFormik({
        initialValues: {
            endpoint: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.endpoint) {
                errors.endpoint = 'Endpoint is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            // setConnected(true);
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <Panel header="Connect">
            <Toast ref={toast} />
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <div className="flex flex-column gap-2">
                    <label htmlFor="endpoint">Endpoint</label>
                    <InputText
                        id="endpoint"
                        name="endpoint"
                        placeholder="ws://localhost:8080/websocket"
                        value={formik.values.endpoint}
                        onChange={(e) => {
                            formik.setFieldValue('endpoint', e.target.value);
                        }}
                        className={classNames('w-full', { 'p-invalid': isFormFieldInvalid('endpoint') })}
                        // disabled={connected}
                    />
                    {getFormErrorMessage('endpoint')}
                    <Button type="submit" label="Connect" />
                    {/* <ToggleButton 
                        onLabel="Connected" 
                        offLabel="Connect" 
                        onIcon="pi pi-check" 
                        offIcon="pi pi-times"
                        checked={checked}
                        onChange={(e) => setChecked(e.value)}
                    /> */}
                </div>
            </form>
        </Panel>
    )
}