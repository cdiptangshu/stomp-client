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
import { connect, disconnect } from './connection-slice';
import { useToast } from './ToastProvider';

export default function ConnectForm() {
  const { connected, endpoint, headers } = useSelector((state) => state.connection);
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const handleConnect = (endpoint, headers) => {
    dispatch(connect({ endpoint, headers }));
    showToast({ severity: 'success', summary: 'Connected', detail: endpoint });
  };

  const handleDisconnect = () => {
    dispatch(disconnect());
    showToast({ severity: 'warn', summary: 'Disconnected', detail: endpoint });
  };

  const form = useFormik({
    initialValues: {
      endpoint,
      headers
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
      handleConnect(data.endpoint, data.headers);
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

  const showConnectionStatus = () => (connected ? <Badge severity="success" /> : null);
  const getHeader = () => {
    return (
      <span>
        <i className="pi pi-power-off p-overlay-badge">{showConnectionStatus()}</i>
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
            readOnly={connected}
            onChange={(e) => form.setFieldValue('endpoint', e.target.value)}
            className={classNames({ 'p-invalid': isFormFieldInvalid('endpoint') })}
            onFocus={(e) => e.target.select()}
          />
          {getErrorMessage('endpoint')}
        </div>
        <div className="flex flex-column gap-2">
          <span>Headers</span>
          <CodeEditor
            name="headers"
            value={form.values.headers}
            onChange={onChangeHeaders}
            editable={!connected}
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
