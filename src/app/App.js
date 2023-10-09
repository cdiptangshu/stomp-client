import React from 'react';

import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Topbar from './components/Topbar';

import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export default function App() {
  return (
    <div className="mx-2">
      <Topbar />
      <Dashboard />
      <Footer />
    </div>
  );
}