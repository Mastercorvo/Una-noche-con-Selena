
import { useRef, useState, useEffect } from 'react';

import './nivel2.css';

import ReactPlayer from 'react-player';

const dialog = [
    '*Lion escucha unas voces de muy lejano*',
    'Voz 1 (Masculina): Dejame disfrutar más con él, por favor.',
    'Vos 2 (Femenina): No te creí capaz de esas cosas...',
    'Vos 2 (Femenina): Al principio era más gracioso porque me recuerda a mi país, pero...',
    'Voz 1 (Masculina): ¿De que hablas? Ya me has visto antes traer cadáveres de depravados antes.',
    'Vos 2 (Femenina): ¿Él es un depravado?',
    'Voz 1 (Masculina): Esta última y luego termino.',
    'Vos 2 (Femenina): Ok... Mientras estaré inyectando a más gente.',
    'Voz 1 (Masculina): Bien. Hora de jugar al lobo y al ratón amiguito...',
    'Voz 1 (Masculina): ¿Te gusta el socialismo?',
    'Lion: ... ¿El Qué?......', //10
    'Lion: ... ¿Que demonios es esto?',
    'Lion: ... ¿Es quien creo que es?...',
    'Lion: ......',
    'Lion: No suena tan mal...', // 15
    'Lion: ¡YA NO LO SOPORTO! ¿¡QUIEN DIABLOS ES CHAVEZ!? ¡¡TEO ODIOOOOOOOOOOOOO!!',
    '*Sufre, grita y llora de agonía*',
    'Eso es todo amigos, disfruten de la excelente música :D',
    'Nos vemos hasta que Cereal deje de pedir secuelas :D',
    '¿Aun sigues aquí?',
    'Si tienes una clara y buena idea podríamos hacer un buen videojuego con buenos resultados.',
    'incluso si es un juego pequeño.',
    'No lo olviden :D',
    'Adios.'
];

function Nivel2(){

    const [open, setOpen] = useState(0);

    const [eyes, setEyes] = useState(true);

    const [text, setText] = useState('Lion: ¿En dónde estoy? ¿Por que todo esta blanco? ¿Esto es un sueño?')

    const [showText, setShowText] = useState(true);

    const [play, setPlay] = useState(false);

    const [seconds, setSeconds]= useState(360000);

    const [timerText, setTimerText] = useState('100:60:60');

    useEffect(()=>{

        setTimerText((seconds/60/60).toFixed(0) + ':' + ((seconds%3600)/60).toFixed(0) + ':' + (seconds%60).toFixed(0))

    }, [seconds]);

    const [showBaile, setShowBaile] = useState(false);
    const [dance, setDance] = useState('');

    useEffect(()=>{

        if(seconds <= 0){

            if(anyTimeInterval.current) clearInterval(anyTimeInterval.current);

            setSeconds('Disfruta la música todo el tiempo que quieras Lion :D')

        }

    }, [seconds])

    function clickOpen(){

        if((open + 10) === 100){

            setEyes(false);

            return false

        }

        setOpen(v=>v+10);

    }

    const count = useRef(0);

    const anyTimeInterval = useRef(undefined);

    function avanzar(){

        setText(dialog[count.current]);

        if(count.current === 11){

            setShowText(false);

            setPlay(true);
        }
        
        if(count.current === 15){

            setShowText(false);

            setContinueA('paso');

        }

        if(count.current === 24){

            setShowText(false);
        
        }

        count.current += 1;

    }

    const [continueA, setContinueA] = useState('');

    const [position, setPosition] = useState('translateX(2000px)')

    const musicElement = useRef(undefined);

    const countAnimation = useRef(0);

    const countMusic = useRef(0)

    return (<div className="nivel2">

        {showBaile && <div className="timer">{timerText}</div>}

        <div className={"continua " + continueA} onAnimationEnd={()=>{

            countAnimation.current += 1

            if(countAnimation.current === 1){

                setTimeout(()=>{

                    setContinueA('paso2');
    
                }, 2000);

                setSeconds(180000)

                setInterval(()=>{

                    setSeconds(v=>v-1);
        
                }, 1000);

            }

            if(countAnimation.current === 2){

                setShowText(true);

            }

        }}>

            50 Horas después

        </div>

        <div className={"baile " + dance} style={{transform: position}}  onAnimationEnd={()=>{

            setPosition('');

            setDance('radical');

            setShowBaile(true);

        }}></div>

        <ReactPlayer url="https://soundcloud.com/obnu/chavez-corazon-del-pueblo" onProgress={({playedSeconds})=>{

            if((playedSeconds > 9) && (countMusic.current === 0)){

                countMusic.current = 1;

                setShowText(true);

            }

        }}
        
        onStart={()=>{

            setDance('llegada')

            anyTimeInterval.current = setInterval(()=>{

                setSeconds(v=>v-1);
    
            }, 1000);


        }} playing={play} width="0" height="0" onEnded={()=>{

            if(musicElement.current) musicElement.current.seekTo(0,0);

            setPlay(false);

            setTimeout(()=>setPlay(true),1);

        }} ref={musicElement}/>

        {!eyes && showText && <div className="text" onClick={avanzar}>{text}</div>}

        {eyes && <div className="eyes">

            <div className="click" onClick={clickOpen} >Clickea para abrir los ojos.</div>

            <div className="open" style={{height: open + '%'}}></div>

        </div>}

    </div>)

}

export default Nivel2;