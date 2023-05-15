import './App.css';
import {useState} from 'react'
import Stations from './components/Stations';

function App() {
const [stations, setStations] = useState([])


  return (
    <div className="App">
      <Stations stations={stations} setStations={setStations}/>
    </div>
  );
}

export default App;
