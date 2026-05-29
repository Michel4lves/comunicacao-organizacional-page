import "./Hero.css";
import heroImage from '../../assets/pictures/01_hero_equipe.png';
import ImpactCard from "../cards/ImpactCard";

const Hero = () => {

	return (
		<div className="hero">
			<div className="hero-text">
				<h1 className="hero-title">COMUNICAÇÃO ORGANIZACIONAL</h1>
				<h4 className="hero-subtitle">O elo entre pessoas, ideias e resultados</h4>
				<p>Conectar bem é mais do que falar.</p>
				<p>É conectar, engajar e inspirar.</p>
				<p>Quando a informação circula com clareza,</p>
				<p>todos caminham na mesma direção</p>
				<p>e a empresa vai mais longe.</p>
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="Comunicação Organizacional" />
			</div>
			<div className="hero-card">
				<ImpactCard />
			</div>

		</div>
	)
}

export default Hero
