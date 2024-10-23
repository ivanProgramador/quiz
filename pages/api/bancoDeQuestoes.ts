import QuestaoModel from "@/models/questao";
import RespostaModel from "@/models/resposta";

const questoes: QuestaoModel[] = [
    
    new QuestaoModel(201,'Qual bicho transmite a Doença de chagas ?',[

        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202,'Qual fruto é conhecido no Norte Nordeste como jerimum  ?',[

        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('chuchu'),
        RespostaModel.certa('Abobora'),
    ]),
    new QuestaoModel(203,'Qual fruto é o coletivo de cães ?',[

        RespostaModel.errada('Manada'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204,'Qual é o triangulo que tem todos os dados diferentes  ?',[

        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Trapezio'),
        RespostaModel.errada('Isóceles '),
        RespostaModel.certa('Escaleno'),
    ])


]

export default questoes 