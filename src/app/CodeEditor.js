import React from 'react';

import './CodeEditor.css';
import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { classNames } from 'primereact/utils';
import PropTypes from 'prop-types';

function CodeEditor({ name, value, onChange, editable, showError }) {
  return (
    <CodeMirror
      id={name}
      extensions={[json()]}
      value={value}
      editable={editable}
      onChange={onChange}
      className={classNames({
        'border-1': true,
        'p-invalid': showError,
        'surface-border': !showError
      })}
    />
  );
}

CodeEditor.defaultProps = {
  value: '',
  editable: true,
  showError: false
};

CodeEditor.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  editable: PropTypes.bool,
  showError: PropTypes.bool
};

export default CodeEditor;
