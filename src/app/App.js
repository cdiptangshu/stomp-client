import React from 'react';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import Dashboard from './Dashboard';
import Footer from './Footer';
import Topbar from './Topbar';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

export default function App() {
  return (
    <div>
      <Topbar />
      <Dashboard />
      <Footer />
    </div>
  );
}
