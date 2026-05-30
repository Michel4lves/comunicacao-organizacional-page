import CommunicationTypeCard from "../cards/CommunicationTypeCard"
import "./CommunicationTypes.css"

import comunicacao_descendente from "../../assets/pictures/02_comunicacao_descendente.png"
import comunicacao_ascendente from "../../assets/pictures/03_comunicacao_ascendente.png"
import comunicacao_horizontal from "../../assets/pictures/04_comunicacao_horizontal.png"
import comunicacao_informal from "../../assets/pictures/05_comunicacao_informal.png"

import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { PiHandshakeFill } from "react-icons/pi";


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
                    footer_icon={<FaArrowAltCircleDown />}
                    footer_text="Transparência que inspira confiança e engajamento."
                    color="blue"
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
                    footer_icon={<FaArrowAltCircleUp />}
                    footer_text="Escuta ativa que gera participação e inovação."
                    color="green"
                />
                <CommunicationTypeCard
                    title="COMUNICAÇÃO HORIZONTAL"
                    subtitle="Entre áreas e profissionais do mesmo nível"
                    imageSrc={comunicacao_horizontal}
                    topics={["• Integra departamentos",
                            "• Coordena atividades",
                            "• Resolve problemas juntos",
                            "• Compartilha conhecimentos",
                            "• Reduz conflitos" ]}
                    footer_icon={<HiUsers />}
                    footer_text="Colaboração que fortalece e potencializa resultados."
                    color="purple"
                />
                <CommunicationTypeCard
                    title="COMUNICAÇÃO INFORMAL"
                    subtitle="As conexões naturais do ambiente de trabalho"
                    imageSrc={comunicacao_informal}
                    topics={["• Conversas espontâneas",
                            "• Redes de relacionamento",
                            "• Troca de esperiências",
                            "• Agilidade na circulação de informações" ]}
                    footer_icon={<PiHandshakeFill />}
                    footer_text="Relações fortes que criam um ambiente saudável."
                    color="orange"
                />
            </div>
        </div>
    )
}

export default CommunicationTypes
