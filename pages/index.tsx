import Questao from "@/components/Questao";
import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";
import { useState } from "react";



const questaoMock = new QuestaoModel(1,'qual é a melhor cor?',[
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])




export default function Home() {

  const [questao,setQuestao] = useState(questaoMock)
  
 
  function respostaFornecida(indice:number){
      
     

     setQuestao(questao.responderCom(indice));
  }


  
  
  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'100vh'
    }} >
       <Questao respostaFornecida={respostaFornecida} valor={questao} /> 
    </div>
        
    
  );
}
