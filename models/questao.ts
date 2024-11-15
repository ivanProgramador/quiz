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

    static criarUsandoObjeto(obj:QuestaoModel):QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp));

        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou)
     }



    get naoRespondida(){
        return !this.respondida
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





     responderCom(indice:number):QuestaoModel{

        /*
         Verificando se o cliente acertou a resposta.
         Oque vai chegar aqui é um array com os objetos baseados
         na classe resposta esses objetos tem o atributo 
         acertou, é esse atributo que eu estou testando
         o simbolo ? verifica se o atributo certa é true
        */
        const acertou = this.#respostas[indice]?.certa

        /*
         Agora para obter os outros dados da resposta 
         que veio eu tenho que percorrer as repostas que vieram  
         e vou pegar o indice da reposta certa
        */

         const resposta = this.#respostas.map((resposta,i)=>{
            
            /*
             comparando se o indice da resposta que chegou é o mesmo
             indice da resposta correta
            */ 
            const respostaSelecionada = indice === i 
            /*
             se for aqui eu testo se a resposta está correta
             se ela for a reposta selecion ou se ela for a reposta certa 
             a varivel deveRevbelar recebe true  
            */

            const deveRevelar = respostaSelecionada || resposta.certa

            /*
              aqui eu testo se deveRevelar e verdadeira se for ele revela a reposta ,
              se não ele so retorna resposta que recebeu 
            */
            return deveRevelar ? resposta.revelar(): resposta
             
         })

         return new QuestaoModel(this.id,this.enunciado,resposta, acertou)
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
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.paraObjeto()),
            acertou: this.#acertou

        }
     }
}