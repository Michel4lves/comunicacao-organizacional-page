import "./ImpactCard.css";

const ImpactCard = () => {

    return (
        <div className="impact-card">
            <h1 className="impact-title">
                UMA COMUNICAÇÃO EFICAZ IMPACTA:
                <span className="left-arrow"></span>
                <span className="right-arrow"></span>
            </h1>
            <div className="impact-itens">
                <p>Alinhamento entre equipes</p>
            </div>
            <div className="impact-itens">
                <p>Melhores decisãoes</p>
            </div>
            <div className="impact-itens">
                <p>Engajamento dos colaboradores</p>
            </div>
            <div className="impact-itens">
                <p>Mais produtividade e resultados</p>
            </div>
            <div className="impact-itens">
                <p>Confiança e cultura fortalecidas</p>
            </div>
        </div>
    )

}

export default ImpactCard
