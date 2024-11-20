import questoes from "../bancoDeQuestoes"
import {embaralhar} from "../../../functions/arrays"

export default (req:any,res:any)=>{

    //pegando os ids das questoes 
    const ids = questoes.map(questao => questao.id)

    res.status(200).json(embaralhar(ids));


}