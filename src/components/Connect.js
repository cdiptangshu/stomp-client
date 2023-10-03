
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';

export default function Connect() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.value) {
                errors.value = 'Name - Surname is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
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
                        value={formik.values.value}
                        onChange={(e) => {
                            formik.setFieldValue('value', e.target.value);
                        }}
                        className={classNames('w-full', { 'p-invalid': isFormFieldInvalid('value') })}
                    />
                    {getFormErrorMessage('value')}

                    <label htmlFor="headers">Headers</label>
                    <InputTextarea />
                    {getFormErrorMessage('value')}

                    <Button type="submit" label="Connect" />
                </div>
            </form>
        </Panel>
    )
}