import React from 'react';

import Dashboard from './Dashboard';
import Footer from './Footer';
import Topbar from './Topbar';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export default function App() {
  return (
    <div>
      <Topbar />
      <Dashboard />
      <Footer />
    </div>
  );
}
