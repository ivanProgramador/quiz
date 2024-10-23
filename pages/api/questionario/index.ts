import questoes from "../bancoDeQuestoes"
import {embaralhar} from "../../../functions/arrays"

export default (req,res)=>{

    //pegando os ids das questoes 
    const ids = questoes.map(questao => questao.id)

    res.status(200).json(embaralhar(ids));


}