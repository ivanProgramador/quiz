import Questao from "@/components/Questao";
import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";
import { useState } from "react";



const questaoMock = new QuestaoModel(1,'qual é a capital do brasil ?',[
  RespostaModel.errada('Rio de janeiro'),
  RespostaModel.errada('Fortaleza'),
  RespostaModel.errada('São Paulo'),
  RespostaModel.certa('Brasilia')
])




export default function Home() {

  const [questao,setQuestao] = useState(questaoMock)
  
 
  function respostaFornecida(indice:number){
     setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado(){
    setQuestao(questao.responderCom(-1));
 }


  
  
  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'100vh'
    }} >
       <Questao 
        respostaFornecida={respostaFornecida}
        valor={questao}
        tempoEsgotado={tempoEsgotado}
        /> 
    </div>
        
    
  );
}
