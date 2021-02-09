import './App.css';

import Level2 from "./nivel2/Nivel2";

import { useState, useRef } from 'react';
function App() {

  const [level, setLevel] = useState();

  return (
    <div className="App">

      <Level2 />

    </div>
  );
}

export default App;
