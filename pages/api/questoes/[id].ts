
import questoes from "../bancoDeQuestoes"

export default (req,res)=>{

    const idSelecionado = +req.query.id;

    const unicaQuestaoOuNada =  questoes.filter(questoes => questoes.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1){

        const questaoSelecionada = unicaQuestaoOuNada[0]

        res.status(200).json(questaoSelecionada.converterParaObjeto())

    }else{

        res.status(204).send()

    }
    
    
    res.status(200).json(questoes[0].converterParaObjeto())

}