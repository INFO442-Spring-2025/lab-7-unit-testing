import './App.css';
import Card from './components/Card';
import './components/css/Card.css'

import PROFS from '../src/data/profs.json'

const profsArray = PROFS.map((profElem) => {
  return (
    <Card
    key={profElem.name}
    data={profElem}/>
  )
})

console.log(PROFS)

const userObj = {
  name: "John Harrison",
  favColor: "kelly green",
  img: "./img/john.jpg",
  url: "https://canvas.uw.edu"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is lab 7!
        <div class="profs-box">
          {profsArray}
        </div>
      </header>
    </div>
  );
}

export default App;
