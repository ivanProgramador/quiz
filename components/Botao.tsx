
import styles from "../styles/Botao.module.css";
import Link from "next/link";

interface BotaoProps{

    texto: string
    href?:string 
    onClick:(e:any) => void

}

export default function Botao(props: BotaoProps){
   
    

    return props.href? (  
        <link href={props.href}>
            <button className={styles.botao}
               onClick={props.onClick}
              >
                {props.texto}
            </button>
        </link>
    ):(
        <button className={styles.botao}
               onClick={props.onClick}
              >
                {props.texto}
            </button>
    )
}

module.exports = Botao;