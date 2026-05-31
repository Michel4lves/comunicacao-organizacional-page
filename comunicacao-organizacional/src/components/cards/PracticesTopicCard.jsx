import "./PracticesCard.css"


const PracticesTopicCard = ({icon, title, text, color}) => {
    return (
        <div className={`practices-topic-card ${color}`}>
            <div className="practices-topic-icon">{icon}</div>
            <div className="practices-topic-textbx">
                <h5 className="practices-topic-title">{title}</h5>
                <p className="practices-topic-text">{text}</p>
            </div>
        </div>
    )
}

export default PracticesTopicCard
