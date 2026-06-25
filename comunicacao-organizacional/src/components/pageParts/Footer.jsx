import "./Footer.css";

import FooterCard from "../cards/FooterCard";
import FeedbackSurvey from "../cards/FeedbackSurvey";


const Footer = () => {

	return (
		<>
			<div className="footer">
				<h2 className="footer-title">LEMBRE-SE:</h2>
				<div className="box-footer-card">
					<FooterCard />
				</div>

			</div>
			<FeedbackSurvey />
		</>
	)
}

export default Footer
