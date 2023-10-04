import React from 'react';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'react-json-pretty/themes/monikai.css';
import ActionsPane from './components/ActionsPane';
import ResultsPane from './components/ResultsPane';

function App() {
  return (
    <div className="container">
      <div className="text-right my-2">
        <span className="text-lg font-bold p-2">STOMP-UI</span>
        <span className="text-sm text-primary">v0.1</span>
      </div>
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
