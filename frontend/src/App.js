import './App.css';
import {useState} from 'react'
import Stations from './components/Stations';

function App() {
const [stations, setStations] = useState([])
const [flipped, setFlipped] = useState(true)


  return (
    <div>
      <Stations stations={stations} setStations={setStations} flipped={flipped} setFlipped={setFlipped}/>
    </div>
  );
}

export default App;
