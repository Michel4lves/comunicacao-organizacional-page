import "./LeadershipCard.css"

import leadership from "../../assets/pictures/06_lideranca.png"
import { FcApproval } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";


const LeadershipCard = () => {
    return (
        <div className="leadership-card">
            <h3 className="leadership-title">O PAPEL DA LIDERANÇA</h3>
            <h5 className="leadership-subtitle">Líderes comunicam. Líderes inspiram.</h5>
            <div className="leadership-skins">
                <img className="leadership-image" src={leadership} alt="leadership"/>
                <ul className="leadership-topics">
                    <li><span><FcApproval /></span>Mantêm canais abertos de diálogo</li>
                    <li><span><FcApproval /></span>Criam ambientes de confiança</li>
                    <li><span><FcApproval /></span>Reduzem incertezas em momentos de mudança</li>
                    <li><span><FcApproval /></span>incentivam a participação das equipes</li>
                    <li><span><FcApproval /></span>Fortalecem o compromisso com os objetivos</li>
                    <li><span><FcApproval /></span>Melhoram o clima e a cultura da empresa</li>
                </ul>
            </div>
            <div className="communication-type-card-footer">
                <div className="communication-type-card-footer-icon"><FaQuoteLeft /></div>
                <p className="communication-type-card-footer-text">
                    "Cominicar é liderar pessoas para um propósito com clareza e empatia.
                </p>
            </div>
        </div>
    )
}

export default LeadershipCard