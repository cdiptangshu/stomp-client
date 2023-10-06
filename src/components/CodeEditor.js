import React from 'react';

import './CodeEditor.css';
import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { classNames } from 'primereact/utils';
import PropTypes from 'prop-types';

function CodeEditor({ value, onChange, showError }) {
  return (
    <CodeMirror
      extensions={[json()]}
      value={value}
      onChange={onChange}
      className={classNames({
        'border-1': true,
        'p-invalid': showError,
        'surface-border': !showError
      })}
    />
  );
}

CodeEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  showError: PropTypes.bool
};

export default CodeEditor;
