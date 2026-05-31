import "./PracticesCard.css"

import PracticesTopicCard from "./PracticesTopicCard";

import { FaShareAlt } from "react-icons/fa";
import { GrAssistListening } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { IoMdMegaphone } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";


const PracticesCard = () => {
    return (
        <div className="practices-card">
            <h3 className="practices-title">PRÁTICAS PARA FORTALECER A COMUNICAÇÃO</h3>
            <div className="practices-topics">
                <PracticesTopicCard
                    icon={<FaShareAlt />}
                    title="Compartilhe informações relevantes"
                    text="Sobre objetivos, resultados, mudanças e desafios."
                    color="blue"
                />
                <PracticesTopicCard
                    icon={<GrAssistListening />}
                    title="Incentive a escuta ativa"
                    text="Valorize opiniões, sugestões e percepções."
                    color="green"
                />
                <PracticesTopicCard
                    icon={<IoMdEye />}
                    title="Estimule a transparência"
                    text="Promova uma cultura baseada na confiança."
                    color="purple"
                />
                <PracticesTopicCard
                    icon={<FaStar />}
                    title="Desenvolva construtivos"
                    text="Transforme conversas em aprendizado."
                    color="dark-orange"
                />
                <PracticesTopicCard
                    icon={<HiUsers />}
                    title="Integre setores e equipes"
                    text="Crie espaços para troca e colaboração."
                    color="magenta"
                />
                <PracticesTopicCard
                    icon={<IoMdMegaphone />}
                    title="Combata rumores com informação"
                    text="Comunique fatos de forma clara e rápida."
                    color="ocean"
                />
                <PracticesTopicCard
                    icon={<FaBookOpen />}
                    title="Valorize o aprendizado contínuo"
                    text="Dissemine conhecimento e desenvolva competências."
                    color="orange"
                />
            </div>
        </div>
    )
}

export default PracticesCard