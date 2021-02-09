
import { useState } from 'react';
import './nivel2.css';

function Nivel2(){

    const [open, setOpen] = useState(0)

    const [eyes, setEyes] = useState(true);

    function clickOpen(){

        if((open + 10) === 100){

            setEyes(false);

            return false

        }

        setOpen(v=>v+10);

    }

    return (<div className="nivel2">

        {eyes && <div className="eyes">

            <div className="click" onClick={clickOpen} >Clickea para abrir los ojos.</div>

            <div className="open" style={{height: open + '%'}}></div>

        </div>}

    </div>)

}

export default Nivel2;