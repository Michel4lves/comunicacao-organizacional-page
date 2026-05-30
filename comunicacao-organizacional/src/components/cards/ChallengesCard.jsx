import "./ChallengesCard.css"

const ChallengesCard = ({ icon, title, text, color }) => {
    return (
        <div className={`challenges-card ${color}`}>
            <div className="challenges-card-icon">{icon}</div>
            <h3 className="challenges-card-title">{title}</h3>
            <p className="challenges-card-text">{text}</p>
        </div>
    )
}

export default ChallengesCard
