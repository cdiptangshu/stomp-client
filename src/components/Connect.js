
import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { ToggleButton } from 'primereact/togglebutton';
import { Toast } from 'primereact/toast';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
import validator from 'validator';

export default function Connect() {
    const toast = useRef(null);
    const [connected, setConnected] = useState(false);

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


            if (data.endpoint && !validator.isURL(data.endpoint, {
                require_tld: false,
                require_protocol: true,
                protocols: ['ws', 'http', 'https']
            })) {
                errors.endpoint = 'Endpoint is not valid.';
            }

            return errors;
        },
        onSubmit: (data) => {
            console.log('connecting...');
            data && show();
            setConnected(true);
            console.log('connected');
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const handleToggle = (connect) => {
        if (connect) {
            formik.submitForm();
        } else {
            setConnected(false);
        }
    };

    return (
        <Panel header="Connect">
            <Toast ref={toast} />
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-column gap-2">
                    <ToggleButton
                        onLabel="Connected"
                        offLabel="Connect"
                        onIcon="pi pi-check"
                        offIcon="pi pi-link"
                        checked={connected}
                        onChange={(e) => handleToggle(e.value)}
                    />
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
                        disabled={connected}
                        onFocus={(e) => e.target.select()}
                    />
                    {getFormErrorMessage('endpoint')}
                </div>                
            </form>
        </Panel>
    )
}