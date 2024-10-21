import questoes from "../bancoDeQuestoes"

export default (req,res)=>{
    res.status(200).send(questoes.map(questao=> questao.id))
}