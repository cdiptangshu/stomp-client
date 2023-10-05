import React from 'react';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ActionsPane from './components/panes/ActionsPane';
import ResultsPane from './components/panes/ResultsPane';
import Banner from './components/Banner';

function App() {
  return (
    <div className="mx-2">
      <Banner />
      <div className="md:flex gap-3">        
        <div className="mb-3 md:w-4">
          <ActionsPane />
        </div>
        <div className="mb-3 md:flex-1">
          <ResultsPane />
        </div>
      </div>
    </div>
  );
}

export default App;
