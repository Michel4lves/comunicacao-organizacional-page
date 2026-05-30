import "./CommunicationTypeCard.css"

const CommunicationTypeCard = ({ title, subtitle, imageSrc, topics, footer_icon, footer_text, color }) => {
    return (
        <div className={`communication-type-card ${color}`}>
            <h3 className="communication-type-card-title">{title}</h3>
            <h5 className="communication-type-card-subtitle">{subtitle}</h5>
            <img className="communication-type-card-image" src={imageSrc} alt={title}/>
            <ul className="communication-type-card-topics">
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
            <div className="communication-type-card-footer">
                <div className="communication-type-card-footer-icon">{footer_icon}</div>
                <p className="communication-type-card-footer-text">{footer_text}</p>
            </div>
        </div>
    )
}

export default CommunicationTypeCard
