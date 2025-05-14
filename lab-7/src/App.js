import React, { useState } from "react";
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import './components/css/Card.css'
import './components/css/Form.css'

import PROFS from '../src/data/profs.json'

function App() {
  const [style, setStyle] = useState("bg-light");
  const [showCards, setShowCards] = useState(false);

  const changeStyle = () => {
    console.log(style)
    if (style !== "bg-light") setStyle("bg-light");
    else setStyle("bg-success");
  };

  const toggleCards = () => {
    setShowCards(!showCards)
  }
  const profsArray = PROFS.map((profElem) => {
    return (
      <Card
      key={profElem.name}
      data={profElem}
      style={style}
      changeStyle={changeStyle}/>
    )
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <p>John's previous TA gigs!</p>
        <button onClick={toggleCards}>Click to {showCards ? "hide" : "see"} classes</button>
        <div className="profs-box">
          {showCards ? profsArray : null}
        </div>

        What courses have you taken?
        <Form data={PROFS}/>
      </header>
    </div>
  );
}

export default App;
