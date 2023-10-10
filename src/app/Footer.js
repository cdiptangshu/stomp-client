import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="text-right text-xs">
      <p
        {...{
          'xmlns:cc': 'http://creativecommons.org/ns#',
          'xmlns:dct': 'http://purl.org/dc/terms/'
        }}
      >
        <a
          rel="cc:attributionURL"
          href="https://github.com/cdiptangshu/stomp-client"
          {...{ property: 'dct:title' }}
        >
          Stomp Client
        </a>{' '}
        by{' '}
        <a
          rel="cc:attributionURL dct:creator"
          href="https://github.com/cdiptangshu"
          {...{ property: 'cc:attributionName' }}
        >
          Diptangshu Chakrabarty
        </a>{' '}
        is licensed under{' '}
        <a
          href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          CC BY-SA 4.0
          <img
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            height="22px"
            width="22px"
            alt="CC"
          />
          <img
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            height="22px"
            width="22px"
            alt="BY"
          />
          <img
            style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
            height="22px"
            width="22px"
            alt="SA"
          />
        </a>
      </p>
    </div>
  );
}
