
import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";
import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";



const questaoMock = new QuestaoModel(1,'qual é a capital do brasil ?',[
  RespostaModel.errada('Rio de janeiro'),
  RespostaModel.errada('Fortaleza'),
  RespostaModel.errada('São Paulo'),
  RespostaModel.certa('Brasilia')
])



const BASE_URL = 'http://localhost:3000/api';
export default function Home() {
  
  const [idsDasQuestoes,setIdsDasQuestoes] = useState<number[]>([]);

  const [questao,setQuestao] = useState<QuestaoModel>(questaoMock);
  
  const[respostasCertas, setrespostasCertas] = useState<number>(0);


  async function carregarIdsDasQuestoes(){

     const resp = await fetch(`${BASE_URL}/questionario`);
     const idsDasQuestoes = await resp.json();
     setIdsDasQuestoes(idsDasQuestoes);

  }

  async function carregarQuestao(idQuestao:number){

    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
 }

  //amortecedor de efeitos colaterais

  useEffect(()=>{
    carregarIdsDasQuestoes();
  },[]);
  
  useEffect(()=>{
    
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);

  },[idsDasQuestoes]);

  
  function questaoRespondida(questaoRespondida:QuestaoModel){
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setrespostasCertas(respostasCertas +(acertou? 1:0));

  }


  function irPraProximoPasso(){

  }
 
   


  
  
  return (
   
       <Questionario
         questao={questao}
         ultima={false}
         questaoRespondida={questaoRespondida}
         irPraProximoPasso={irPraProximoPasso}

       
       />
        
   
        
    
  );
}
