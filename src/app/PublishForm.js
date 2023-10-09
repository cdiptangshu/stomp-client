import React from 'react';

import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';

import CodeEditor from './CodeEditor';
import { REGEX_TOPIC } from './constants';
import { send } from './publishing-slice';

function PublishForm({ disabled }) {
  const { topic, message } = useSelector((state) => state.publishing);
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      topic,
      message
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
      return errors;
    },
    onSubmit: (data) => {
      const { topic, message } = data;
      console.log('Sending message to', topic, '-', message);

      dispatch(send({ topic, message }));
    }
  });

  const onChangeMessage = React.useCallback((val) => {
    form.setFieldValue('message', val);
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

  if (disabled) {
    return null;
  }

  return (
    <Panel header={getHeader()} toggleable>
      <div className="flex flex-column gap-2">
        <div className="flex flex-column gap-2">
          <label htmlFor="send-topic">Topic</label>
          <InputText
            id="send-topic"
            name="send-topic"
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
            value={form.values.message}
            onChange={onChangeMessage}
            showError={isFormFieldInvalid('message')}
          />
          {getErrorMessage('message')}
        </div>
        <Button type="submit" label="Send" onClick={form.handleSubmit} />
      </div>
    </Panel>
  );
}

PublishForm.propTypes = {
  disabled: PropTypes.bool
};

export default PublishForm;
