import CommunicationTypeCard from "../cards/CommunicationTypeCard"
import "./CommunicationTypes.css"

import comunicacao_descendente from "../../assets/pictures/02_comunicacao_descendente.png"
import comunicacao_ascendente from "../../assets/pictures/03_comunicacao_ascendente.png"

const CommunicationTypes = () => {
    return (
        <div className="communication-types">
            <h2 className="communication-types-title">OS PRINCIPAIS FLUXOS DA COMUNICAÇÃO ORGANIZACIONAL</h2>
            <div className="box-types-container">
                <CommunicationTypeCard
                    title="COMUNICAÇÃO DESCENDENTE"
                    subtitle="Da liderança para as equipes"
                    imageSrc={comunicacao_descendente}
                    topics={["• Orienta e direciona atividades",
                            "• Compartilha metas e resultados",
                            "• Informa mudanças",
                            "• Oferece feedback e treinamentos",
                            "• Promove alinhamento" ]}
                    footer="Transparência que inspira confiança e engajamento."
                />
                <CommunicationTypeCard
                    title="COMUNICAÇÃO ASCENDENTE"
                    subtitle="Das equipes para a liderança"
                    imageSrc={comunicacao_ascendente}
                    topics={["• Identifica problemas rapidamente",
                            "• Traz idéias e sugestões",
                            "• Melhora processos",
                            "• Fortalece a confiança",
                            "• Apoia decisões mais assertivas" ]}
                    footer="Escuta ativa que gera participação e inovação."
                />
                
            </div>

        </div>
    )
}

export default CommunicationTypes
