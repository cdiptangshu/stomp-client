import React from 'react';

import './CodeEditor.css';
import { json } from '@codemirror/lang-json';
import CodeMirror from '@uiw/react-codemirror';
import { classNames } from 'primereact/utils';
import PropTypes from 'prop-types';

function CodeEditor({ value = '', onChange, editable = true, showError = false }) {
  return (
    <CodeMirror
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

CodeEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  editable: PropTypes.bool,
  showError: PropTypes.bool
};

export default CodeEditor;
