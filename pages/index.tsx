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
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1));
    }
   
 }


  
  
  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'100vh'
    }} >
       <Questao 
        tempoResposta={5}
        respostaFornecida={respostaFornecida}
        valor={questao}
        tempoEsgotado={tempoEsgotado}
        /> 
    </div>
        
    
  );
}
