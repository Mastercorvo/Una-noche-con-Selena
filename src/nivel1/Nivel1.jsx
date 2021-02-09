import './nivel.css';

import { useState, useRef } from 'react';

import ReactPlayer from 'react-player'

const dialog = ["Un Hombre: Hola, Selena.", "Selena: Hola.", "Un Hombre: ¿Quieres pasar un rato divertido?", "Selena: Ni te conozco.", "Un Hombre: *Se saca el chorizo*", "Selena: HO POR DIOS! ES GIGANTESCO!", "Selena: Bueno... Dame un momento ¿Sí?", "Un Hombre: Ok.","*Se van a un cuarto oscuro*", "*Tienen Sexo intenso*", "*Sexo Muy intenso*", "*Terminan*", "Selena: Uff... Fue fantástico... ¿Como te llamas?", "Un Hombre: Me llamo Lion.", "Fin :D", "Recarga para divertirte otra vez :D", "Eso es todo.", "¿Aun sigues aquí?", "¿Sabes lo que pasa cuando alguien tiene la idea clara de lo que quiere para desarrollar un videojuego junto a un programador?", "Se obtienen resultados muy buenos aun que el juego sea pequeño.", "No lo olviden.", "Disfruten la rola."]

const SelenaNormal = "https://i.ibb.co/dgP6TZY/selena10.png"

const SelenaAvergonzada = "https://i.ibb.co/jRD33qx/selena2.png";

const SelenaDesconfia  = "https://i.ibb.co/vYX4mcJ/selena9.png";

const SeleneaApenada = 'https://i.ibb.co/RYGxzVv/selena8.png';

function Nivel1() {

  const count = useRef(0);

  const [foto, setFoto] = useState('https://i.ibb.co/dgP6TZY/selena10.png')

  const [text, setText] = useState(0);

  const [color, setColor] = useState('linear-gradient(to right, red, blue)')

  const [boom, setBoom] = useState('');

  const [fin, setFin] = useState(false);

  const [play, setPlay] = useState(false);

  const [content, setContent] = useState('¿?')

  function avanzar(){

    count.current += 1;
    
    setText(count.current);

    if(count.current === 3) setFoto(SelenaDesconfia);
    if(count.current === 5) setFoto(SelenaAvergonzada);
    if(count.current === 6) setFoto(SeleneaApenada);

    if(count.current === 8){

      setFoto('');

      setColor('')

    }

    if(count.current === 9){

      setBoom("duro")

    }

    if(count.current === 10){

      setBoom("superDuro")

    }

    if(count.current === 11){

      setBoom("")

    }

    if(count.current === 12){

      setFoto(SeleneaApenada);

    }
  
    if(count.current === 13){

      setFoto(SelenaAvergonzada);

    }

    if(count.current === 17){

      setFin(true);

    }

    if(count.current === 21){

      setPlay(true);

      setContent(':D')

    }

  }

  return (
    <div className="nivel1">

    <ReactPlayer width={0} height={0} url='https://soundcloud.com/slionhartx/devil-trigger' playing={play} loop={true}/>

      <div className={"lugar " + boom} style={{backgroundImage:color}}>

        {fin && <p className="fin">{content}</p>}

        {!fin &&<div className="Selena" style={{backgroundImage:`url(${foto})`}}></div>}

      </div>

        <div className="text" onClick={avanzar}>{dialog[text]}</div>

    </div>
  );
}

export default Nivel1;
