import Questao from "@/components/Questao";
import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";


export default function Home() {
  
  const questaoTeste = new QuestaoModel(1,'qual é a melhor cor?',[
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Preta')
  ])


  
  
  return (
    <div style={{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'100vh'
    }} >
       <Questao valor={questaoTeste} /> 
    </div>
        
    
  );
}
