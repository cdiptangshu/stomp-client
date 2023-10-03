import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Config from './components/Config';
import Logs from './components/Logs';

function App() {
  return (
    <div className="container">
      <div className="text-right my-2">
        <span className="text-lg font-bold p-2">STOMP-UI</span>
        <span className="text-sm text-primary">v0.1</span>
      </div>
      <div className="grid">
        <div className="col-12 md:col-5">
          <Config></Config>
        </div>
        <div className="col-12 md:col-7">
          <Logs></Logs>
        </div>
      </div>
    </div>
  );
}

export default App;
