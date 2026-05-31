import "./Borderless.css";

import mundiMap from "../../assets/pictures/07_organizacao_sem_fronteiras.png"

import { FaCheck } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const Borderless = () => {
    return (
        <div className="borderless">
            <div className="borderless-info">
                <h5 className="borderless-info-title">ORGANIZAÇÃO SEM FRONTEIRAS: INFORMAÇÃO QUE TRANSFORMA</h5>
                <p className="borderless-info-text">
                    Empresas que derrubam barreiras e permitem o livre fluxo de informaçáo são mais ágeis, inovadoras e competitivas.
                </p>
                <ul className="borderless-info-topics">
                    <li><span><FaCheck /></span>Agilidade na tomada decisões</li>
                    <li><span><FaCheck /></span>Compartilhamento de conhecirnento</li>
                    <li><span><FaCheck /></span>Maior integração entre áreas</li>
                    <li><span><FaCheck /></span>Inovação constante</li>
                    <li><span><FaCheck /></span>Melhor experiência para colaboradores e clientes</li>
                </ul>
            </div>
            <img className="borderless-image" src={mundiMap} alt="borderless"/>
            <div className="borderless-communication-card">
                <div className="borderless-communication-card-icon">
                    <BsFillRocketTakeoffFill />
                </div>
                <h3 className="borderless-communication-card-title">
                    COMUNICAR BEM NÃO É APENAS TRANSMITIR MENSAGENS. É CRIAR ENTENDIMENTO, ENGAJAMENTO E RESULTADOS.
                </h3>
                <p className="borderless-communication-card-text">
                    Quarufo todos se conectam, a empresa cresce. Juntos, vamos mais longe!
                </p>
            </div>
        </div>
    )
}

export default Borderless