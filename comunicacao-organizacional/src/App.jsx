import './App.css'
import Hero from './components/pageParts/Hero'
import CommunicationTypes from './components/pageParts/CommunicationTypes'
import Challenges from './components/pageParts/Challenges'
import LeadershipAndPractices from './components/pageParts/LeadershipAndPractices'
import Borderless from './components/pageParts/Borderless'
import Footer from './components/pageParts/Footer'

function App() {
  
  return (
    <div className="App">
      <Hero />
      <CommunicationTypes />
      <Challenges/>
      <LeadershipAndPractices/>
      <Borderless/>
      <div style={{
        textAlign: "center",
        padding: "48px 24px",
        backgroundColor: "#f5f5f5"
      }}>
        <h3 style={{ marginBottom: "12px", fontSize: "1.2rem", color: "#555" }}>
          O material foi útil para você?
        </h3>
        <p style={{ marginBottom: "24px", color: "#555" }}>
          Deixe seu feedback e nos ajude a melhorar!
        </p>
        
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZKafLnYM_Dj270t-57wmVvh30jLFup8LDXhsWQ_nAwT2UfA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#6a0dad",
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
      <Footer/>
    </div>
  )
}

export default App