import RespostaModel from "./resposta"

export default class QuestaoModel{

    #id:number 
    #enunciado:string 
    #respostas:RespostaModel[]
    #acertou:boolean 
    //#respondida:boolean
    
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
              eu ja ssei qua pergunta foi respondida 
            */ 

            if(resposta.revelada) return true
        }

        //se não eu retorno false 

        return false 
     }

     paraObjeto(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: [],
            acertou: this.#acertou

        }
     }
}