import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps{
    duracao: number
    tempoEEsgotado: ()=>void;
}
export default function Temporizador(props: TemporizadorProps){
    return(
        <div className={styles.Temporizador}>

            <CountdownCircleTimer
              duration={props.duracao}
              size={120}
              isPlaying
              onComplete={props.tempoEEsgotado}
              colors={['#BCE596',0.33] }

            ></CountdownCircleTimer>


        </div>
    )

}
