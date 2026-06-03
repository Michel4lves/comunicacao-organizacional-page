import "./FooterCard.css";
import { TbTargetArrow } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa6";


const FooterCard = () => {
    return (
        <div className="footer-card">
            <div className="footer-itens">
                <FaHeart />
                <p>Comunicação é respeito.</p>
            </div>
            <div className="footer-itens">
                <FaPeopleGroup />
                <p>Diálogo é colaboração.</p>
            </div>
            <div className="footer-itens">
                <TbTargetArrow />
                <p>Clareza é alinhamento.</p>
            </div>
            <div className="footer-itens">
                <PiPottedPlantFill />
                <p>Confiança gera resultados.</p>
            </div>
            <div className="footer-itens">
                <FaTrophy />
                <p>Equipes conectadas alcançam o extraordinário.</p>
            </div>
        </div>
    )
}

export default FooterCard
