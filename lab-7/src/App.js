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
  
  // Use the data attr on the title to hold an identifier for testing https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="header-title">John's previous TA gigs!</p>
        <button data-testid="card-toggle" onClick={toggleCards}>Click to {showCards ? "hide" : "see"} classes</button>
        <div className="profs-box">
          {showCards ? profsArray : null}
        </div>

        <Form data={PROFS}/>
      </header>
    </div>
  );
}

export default App;
