import questoes from '../bancoDeQuestoes'

export default (req:any,res:any)=>{
     
     /*
      pegando o id da pergunta que foi solicitada pela requisição 
     */
     const idSelecionado = +req.query.id;

     //fazendo a seleção dentro do array 
       
     const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado); 

     if(unicaQuestaoOuNada.length === 1){
          const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
          res.status(200).json(questaoSelecionada.converterParaObjeto())
     }else{
          res.status(204).send()

     }

        
     res.status(200).json(questoes[0].converterParaObjeto());
}