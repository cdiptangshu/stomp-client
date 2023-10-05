import React from 'react';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ControlsPane from './components/panes/ControlsPane';
import MessagesPane from './components/panes/MessagesPane';
import Banner from './components/Banner';

function App() {
  return (
    <div className="mx-2">
      <Banner />
      <div className="md:flex gap-3">        
        <div className="mb-3 md:w-4">
          <ControlsPane />
        </div>
        <div className="mb-3 md:flex-1">
          <MessagesPane />
        </div>
      </div>
    </div>
  );
}

export default App;
