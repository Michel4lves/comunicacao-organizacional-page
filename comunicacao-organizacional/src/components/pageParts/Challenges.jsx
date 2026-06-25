import "./Challenges.css"
import ChallengesCard from "../cards/ChallengesCard"

import { TbFileInfoFilled } from "react-icons/tb";
import { IoIosLock } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const Challenges = () => {
    return (
        <div className="challenges-types">
            <h2 className="challenges-title">DESAFIOS QUE PODEM ENFRAQUECER A COMUNICAÇÃO</h2>
            <div className="box-challenges-container">
                <div className="box-challenges-card">
                    <ChallengesCard
                        icon={<TbFileInfoFilled />}
                        title="Sobrecarga de informações"
                        text="Excesso de mensagens dificulta o foco no que realmente importa."
                        color="blue"
                    />
                    <ChallengesCard
                        icon={<IoIosLock />}
                        title="Falta de transparência"
                        text="A ausência de informações gera insegurança e especulações."
                        color="green"
                    />
                    <ChallengesCard
                        icon={<FaFilter />}
                        title="Filtragem da informação"
                        text="Mensagens podem perder conteúdo ou se distorcer ao passar por vários níveis."
                        color="purple"
                    />
                    <ChallengesCard
                        icon={<MdFeedback />}
                        title="Resistência ao feedback"
                        text="Sem diálogo aberto, o aprendizado e a melhoria ficam limitados."
                        color="orange"
                    />
                    <ChallengesCard
                        icon={<FaPeopleGroup />}
                        title="Rumores e fofocas"
                        text="Podem desmotivar e gerar desconfiança quando não há comunicação clara."
                        color="magenta"
                    />
                </div>
                <div className="box-challenges-footer">
                    <h4 className="challenges-footer-text"><span><FaStar /></span> Informação correta, no tempo certo e as pessoas certas transforma desafios em oportunidades.</h4>
                </div>
            </div>
        </div>
    )
}

export default Challenges
