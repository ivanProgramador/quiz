
import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";
import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import { useRouter } from "next/router";




const BASE_URL = 'http://localhost:3000/api';

export default function Home() {

  const router = useRouter();
  
  const [idsDasQuestoes,setIdsDasQuestoes] = useState<number[]>([]);

  const [questao,setQuestao] = useState<QuestaoModel>();
  
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


  //antes de ir para porxima pergunta eu preciso saber qual é o id 
  //da pergunta atual enrtão eu vou essa função para pegar esse id 
  //e adicionar mais 1

  function idProximaPergunta(){

  

      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
   
       return idsDasQuestoes[proximoIndice];

    
    
  }

  //agora essa função vai de fato para a o proximo passo
  //com base no id que eu peguei 
  
  function irPraProximoPasso(){
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId): finalizar()
  }

  function irPraProximaQuestao(proximoId:number){
    carregarQuestao(proximoId);

  }

  function finalizar(){
    router.push({
      pathname:'/resultado',
      query:{
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
   



  }


 
   


  
  
  return questao ? <Questionario
             questao={questao}
             ultima={idProximaPergunta() === undefined }
             questaoRespondida={questaoRespondida}
             irPraProximoPasso={irPraProximoPasso}
    /> :false
  }
     
      
        
   
        
    
  

