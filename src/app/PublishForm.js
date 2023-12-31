import React, { useContext } from 'react';

import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
import { useSelector } from 'react-redux';
import validator from 'validator';

import CodeEditor from './CodeEditor';
import { REGEX_TOPIC } from './constants';
import { StompClientContext } from './StompClient';

function PublishForm() {
  const { topic, message, headers } = useSelector((state) => state.publishing);
  const stompClient = useContext(StompClientContext);

  const form = useFormik({
    initialValues: {
      topic,
      message,
      headers
    },
    validate: (data) => {
      let errors = {};

      if (validator.isEmpty(data.topic)) {
        errors.topic = 'Topic is required.';
      } else if (!validator.matches(data.topic, REGEX_TOPIC)) {
        errors.topic = 'Topic is not valid.';
      }

      if (validator.isEmpty(data.message)) {
        errors.message = 'Message is requried.';
      } else if (!validator.isJSON(data.message)) {
        errors.message = 'Invalid JSON message.';
      }

      if (!validator.isEmpty(data.headers) && !validator.isJSON(data.headers)) {
        errors.headers = 'Invalid JSON in headers.';
      }

      return errors;
    },
    onSubmit: (data) => stompClient.sendMessage(data)
  });

  const onChangeMessage = React.useCallback((val) => {
    form.setFieldValue('message', val);
  }, []);

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
        <i className="pi pi-send"></i>&nbsp;Send
      </span>
    );
  };

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        <div className="flex flex-column gap-2">
          <label htmlFor="topic">Topic</label>
          <InputText
            id="topic"
            name="topic"
            placeholder="/app/hello"
            value={form.values.topic}
            onChange={(e) => form.setFieldValue('topic', e.target.value)}
            className={classNames({ 'p-invalid': isFormFieldInvalid('topic') })}
            onFocus={(e) => e.target.select()}
          />
          {getErrorMessage('topic')}
        </div>
        <div className="flex flex-column gap-2">
          <span>Message</span>
          <CodeEditor
            name="message"
            value={form.values.message}
            onChange={onChangeMessage}
            showError={isFormFieldInvalid('message')}
          />
          {getErrorMessage('message')}
        </div>
        <div className="flex flex-column gap-2">
          <span>Headers</span>
          <CodeEditor
            name="headers"
            value={form.values.headers}
            onChange={onChangeHeaders}
            showError={isFormFieldInvalid('headers')}
          />
          {getErrorMessage('headers')}
        </div>
        <Button type="submit" label="Send" onClick={form.handleSubmit} />
      </div>
    </Panel>
  );
}

export default PublishForm;
