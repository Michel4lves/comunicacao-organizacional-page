import "./CommunicationTypeCard.css"

const CommunicationTypeCard = ({ title, subtitle, imageSrc, topics, footer, color }) => {
    return (
        <div className={`communication-type-card ${color}`}>
            <h3 className="communication-type-card-title">{title}</h3>
            <h5 className="communication-type-card-subtitle">{subtitle}</h5>
            <img className="communication-type-card-image" src={imageSrc} alt={title}/>
            {/* <p className="communication-type-card-topics">{topics}</p> */}
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
            <p className="communication-type-card-footer">{footer}</p>
        </div>
    )
}

export default CommunicationTypeCard
