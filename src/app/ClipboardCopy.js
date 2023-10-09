import React from 'react';

import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

function ClipboardCopy({ copyText }) {
  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const handleClick = () => {
    copyTextToClipboard(copyText).catch(console.log);
  };

  return (
    <Button
      icon="pi pi-copy"
      severity="secondary"
      rounded
      text
      title="Copy"
      aria-label="copy"
      onClick={handleClick}
    />
  );
}

ClipboardCopy.propTypes = {
  copyText: PropTypes.string
};

export default ClipboardCopy;
