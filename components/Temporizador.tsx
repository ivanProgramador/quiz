import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";





interface TemporizadorProps{
    key: any
    duracao: number
    tempoEsgotado: ()=>void;
}

export default function Temporizador(props: TemporizadorProps){
    return(
        <div className={styles.Temporizador}>

            <CountdownCircleTimer
              duration={props.duracao}
              size={120}
              isPlaying
              onComplete={props.tempoEsgotado}
              colors={['#BCE596', '#F7B801', '#ED827A']}        
              colorsTime={[2,2,1]}

            >

               {({remainingTime})=> remainingTime}
            </CountdownCircleTimer>

           


        </div>
    )

}
