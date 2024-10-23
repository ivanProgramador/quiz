import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";

const questoes: QuestaoModel[] = [
    
    new QuestaoModel(306,'Qual bicho transmite a Doença de chagas ?',[

        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(304,'Qual fruto é conhecido no Norte Nordeste como jerimum  ?',[

        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('chuchu'),
        RespostaModel.certa('Abobora'),
    ])


]

export default questoes 