import React, { useCallback, useContext, useRef } from 'react';

import { Toast } from 'primereact/toast';
import PropTypes from 'prop-types';

const ToastContext = React.createContext(null);

function ToastProvider({ children }) {
  const toast = useRef(null);
  const showToast = useCallback((content) => {
    toast.current.show(content);
  });

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
}

const useToast = () => {
  return useContext(ToastContext);
};

ToastProvider.propTypes = {
  children: PropTypes.node
};

export { useToast };
export default ToastProvider;
