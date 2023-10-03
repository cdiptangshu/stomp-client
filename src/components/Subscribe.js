import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { ToggleButton } from 'primereact/togglebutton';
import { Toast } from 'primereact/toast';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
        

export default function Subscribe() {
    const toast = useRef(null);
    const [connected, setConnected] = useState(false);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Subscribed', detail: formik.values.topic });
    };

    const formik = useFormik({
        initialValues: {
            topic: ''
        },
        validate: (data) => {
            let errors = {};


            if (!data.topic) {
                errors.topic = 'Topic is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            console.log('subscribing...');
            data && show();
            setConnected(true);
            console.log('subscribed');
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
        <Panel header="Subscribe">
            <Toast ref={toast} />
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-column gap-2">
                    
                    <label htmlFor="topic">Topic</label>
                    <div className="flex gap-2">
                        <InputText
                            id="topic"
                            name="topic"
                            placeholder="/topic/greetings"
                            value={formik.values.topic}
                            onChange={(e) => {
                                formik.setFieldValue('topic', e.target.value);
                            }}
                            className={classNames('w-full', { 'p-invalid': isFormFieldInvalid('topic') })}
                            disabled={connected}
                            onFocus={(e) => e.target.select()}
                        />
                        <ToggleButton
                            onLabel=""
                            offLabel=""
                            onIcon="pi pi-link"
                            offIcon="pi pi-link"
                            checked={connected}
                            onChange={(e) => handleToggle(e.value)}
                            className="w-2"
                        />
                    </div>
                    {getFormErrorMessage('topic')}
                </div>                
            </form>
        </Panel>
    )
}