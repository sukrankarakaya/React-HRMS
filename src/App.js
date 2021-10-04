
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from 'layouts/Dashboard';
import Navi from 'layouts/Navi';
import Flooter from 'layouts/Flooter';


//import { Sidebar ,Grid} from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navi />
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
