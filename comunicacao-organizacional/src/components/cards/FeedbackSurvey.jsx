const FeedbackSurvey = () => {

	return (
		<div style={{
            textAlign: "center",
            padding: "30px 20px",
            backgroundColor: "#f5f5f5"
        }}>
            <h3 style={{ marginBottom: "10px", fontSize: "1.4rem", color: "#446F9A" }}>
                O material foi útil para você?
            </h3>
            <p style={{ marginBottom: "24px", color: "#555", fontSize: "1.2rem" }}>
                Deixe seu feedback e nos ajude a melhorar!
            </p>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZKafLnYM_Dj270t-57wmVvh30jLFup8LDXhsWQ_nAwT2UfA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: "#0A205C",
                    color: "white",
                    padding: "14px 32px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "1rem"
                }}
            >
                Responder Formulário
            </a>
        </div>
	)
}

export default FeedbackSurvey
