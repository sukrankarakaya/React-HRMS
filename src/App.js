
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from 'layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import Navi from 'layouts/Navi';
import Flooter from 'layouts/Flooter';
import Sidebar from 'layouts/Sidebar';

function App() {
  return (
    <div className="App">


      <div className="navbar">
        <Navi />


      </div>
      <div className="Sidebar">
        <Sidebar />


      </div>
      <div className="Dashbord">
        <Dashboard />


      </div>

      <div className="flooter">
        <Flooter />


      </div>










    </div>
  );
}

export default App;
