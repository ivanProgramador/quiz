import styles from '../styles/Enunciado.module.css';

interface EnunciadoProps{
    texto:String
}

export default function Enunciado(props: EnunciadoProps){
    return(
        <div className={styles.enunciado} >

            <div className={styles.texto} >

                {props.texto}

            </div>
           
        </div>
    )
}
