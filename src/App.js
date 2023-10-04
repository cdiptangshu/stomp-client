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
    <div className="container">
      <Banner />
      <div className="grid">
        <div className="col-12 md:col-5">
          <ActionsPane />
        </div>
        <div className="col-12 md:col-7">
          <ResultsPane />
        </div>
      </div>
    </div>
  );
}

export default App;
