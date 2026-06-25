import "./ImpactCard.css";
import { TbTargetArrow } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { BsShieldShaded } from "react-icons/bs";

const ImpactCard = () => {

    return (
        <div className="impact-card">
            <h1 className="impact-title">
                UMA COMUNICAÇÃO EFICAZ IMPACTA:
                <span className="left-arrow"></span>
                <span className="right-arrow"></span>
            </h1>
            <div className="impact-itens">
                <TbTargetArrow />
                <p>Alinhamento entre equipes</p>
            </div>
            <div className="impact-itens">
                <FaUserTie />
                <p>Melhores decisões</p>
            </div>
            <div className="impact-itens">
                <FaHeart />
                <p>Engajamento dos colaboradores</p>
            </div>
            <div className="impact-itens">
                <IoBarChartSharp />
                <p>Mais produtividade e resultados</p>
            </div>
            <div className="impact-itens">
                <BsShieldShaded />
                <p>Confiança e cultura fortalecidas</p>
            </div>
        </div>
    )

}

export default ImpactCard
