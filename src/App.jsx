import './App.css';

import Level2 from "./nivel2/Nivel2";
import Level1 from './nivel1/Nivel1';

import { useState } from 'react';
function App() {

  const [level, setLevel] = useState(0);

  const [showChoosing, setShowChoosing] = useState(true)

  return (
    <div className="App">

      <div className="chose" style={{display:showChoosing?'flex':'none'}}>

        <h1>Escoja un capitulo.</h1>

        <div className="option one" onClick={()=>{

          setLevel(1);
          setShowChoosing(false);


        }}>Capitulo 1</div>
        <div className="option two" onClick={()=>{

          setLevel(2);
          setShowChoosing(false);

        }}>Capitulo 2</div>

      </div>

      {(level === 1) && <Level1 />}
      {(level === 2) && <Level2 />}

    </div>
  );
}

export default App;
