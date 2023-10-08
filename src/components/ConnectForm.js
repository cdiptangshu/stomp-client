import React from 'react';

import { useFormik } from 'formik';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';

import CodeEditor from './CodeEditor';
import { connect, disconnect } from '../connectionSlice';

export default function ConnectForm() {
  const connected = useSelector((state) => state.connection.connected);
  const dispatch = useDispatch();

  const handleConnect = (endpoint, headers) => {
    console.log('Connecting to', endpoint, 'with headers', headers);
    dispatch(connect());
  };

  const handleDisconnect = () => {
    console.log('Disconnecting...');
    dispatch(disconnect());
  };

  const form = useFormik({
    initialValues: {
      endpoint: '',
      headers: ''
    },
    validate: (data) => {
      let errors = {};

      const options = {
        protocols: ['ws', 'http', 'https'],
        require_protocol: true,
        require_tld: false
      };

      if (validator.isEmpty(data.endpoint)) {
        errors.endpoint = 'Endpoint is required.';
      } else if (!validator.isURL(data.endpoint, options)) {
        errors.endpoint = 'Endpoint is not valid.';
      }

      if (!validator.isEmpty(data.headers) && !validator.isJSON(data.headers)) {
        errors.headers = 'Invalid JSON in headers.';
      }

      return errors;
    },
    onSubmit: (data) => {
      handleConnect(data.endpoint, data.headers ? JSON.parse(data.headers) : {});
    }
  });

  const onChangeHeaders = React.useCallback((val) => {
    form.setFieldValue('headers', val);
  }, []);

  const isFormFieldInvalid = (name) => !!(form.touched[name] && form.errors[name]);

  const getErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{form.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-link p-overlay-badge">
          <Badge severity="success" />
        </i>
        &nbsp;Connect
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        <div className="flex flex-column gap-2">
          <label htmlFor="endpoint">Endpoint</label>
          <InputText
            id="endpoint"
            name="endpoint"
            placeholder="ws://localhost:8080/websocket"
            value={form.values.endpoint}
            onChange={(e) => form.setFieldValue('endpoint', e.target.value)}
            className={classNames({ 'p-invalid': isFormFieldInvalid('endpoint') })}
            onFocus={(e) => e.target.select()}
          />
          {getErrorMessage('endpoint')}
        </div>
        <div className="flex flex-column gap-2">
          <span>Headers</span>
          <CodeEditor
            value={form.values.headers}
            onChange={onChangeHeaders}
            showError={isFormFieldInvalid('headers')}
          />
          {getErrorMessage('headers')}
        </div>
        <span className="p-buttonset flex">
          <Button
            type="submit"
            label="Connect"
            className="flex-1"
            disabled={connected}
            onClick={form.handleSubmit}
          />
          <Button
            label="Disconnect"
            severity="secondary"
            className="flex-1"
            disabled={!connected}
            onClick={handleDisconnect}
          />
        </span>
      </div>
    </Panel>
  );
}
