import { embaralhar } from "@/functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel{

    #id:number 
    #enunciado:string 
    #respostas:RespostaModel[]
    #acertou:boolean 
   // #respondida:boolean
    
    constructor(id:number,enunciado:string,repostas:RespostaModel[],acertou:false){
        this.#id = id 
        this.#enunciado = enunciado
        this.#respostas = repostas
        this.#acertou = acertou
       
    }

    get id(){
        return this.#id
    }
    get enunciado(){
        return this.#enunciado
    }
    get respostas(){
        return this.#respostas
    }
    get acertou(){
        return this.#acertou
    }

  



    embaralharRespostas():QuestaoModel{
        
        let respostasEmbaralhadas = embaralhar(this.#respostas)

        return new QuestaoModel(this.#id,this.#enunciado,respostasEmbaralhadas,this.#acertou = false )
    }





    get respondida(){
        /*
         O atributo respostas recebe um array de objetos baseados na classe RespostaModel 
         como se trata de uma array eu faço um for para percorer cada um desses objetos 
         e jogo dentro da varivel resposta           
        */
        for(let resposta of this.#respostas){

            /*
              agora eu testo se a reposta foi revelada
              se sim eu retorno true se uma resposta foi revelada 
              eu já sei que pergunta foi respondida 
            */ 

            if(resposta.revelada) return true
        }

        //se não eu retorno false 

        return false 
     }


     /*
        Esse metodo vai receber a resposta que o usuario deu 
        e analisar se ela está correta para isso ele vai fazer um teste 
        no atraibuto correta dela se ele estiver true ok se não estiver 
        ele vai revelar a resposta correta  
     
     */
     responderCom(indice:number):QuestaoModel{

        //testando se a reposta está certa
        const acertou = this.#respostas[indice]?.certa

        /* 
          de qualquer forma eu vou precisar retornar outra lista de questões tanto para mostrar 
          a ele qual é a correta quanto para mostrar a alternativa que ele escolheu  
        */  
        const respostas = this.#respostas.map((resposta,i)=>{
            const respostaSelecionada = indice === i 
            const deveRevelar = respostaSelecionada || resposta.certa 
            return respostaSelecionada ? resposta.revelar() : resposta
        })

      
        

     }

     /* 
      essa função vai converter a questão recebida como parâmetro
      para um objeto literal que será retornado pela api,
      no caso do ataibuto respostas ele recebe um array de respostas
      por isso eu usop o map para poder ler cada uma delas e depois converter para objeto literal 
      para que api possa retornar 
     */

     converterParaObjeto(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
            acertou: this.#acertou

        }
     }
}