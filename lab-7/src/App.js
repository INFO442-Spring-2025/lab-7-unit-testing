import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import './components/css/Card.css'
import './components/css/Form.css'

import PROFS from '../src/data/profs.json'

const profsArray = PROFS.map((profElem) => {
  return (
    <Card
    key={profElem.name}
    data={profElem}/>
  )
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        John's previous TA gigs!
        <div class="profs-box">
          {profsArray}
        </div>

        What courses have you taken?
        <Form data={PROFS}/>
      </header>
    </div>
  );
}

export default App;
