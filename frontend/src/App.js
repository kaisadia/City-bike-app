import './App.css';
import {useState} from 'react'
import Stations from './components/Stations';


function App() {
const [stations, setStations] = useState([])

  return (
    <div>
      <h1>Helsinki city bike app</h1>
      <Stations stations={stations} setStations={setStations}/>
    </div>
  );
}

export default App;
