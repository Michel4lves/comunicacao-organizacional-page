import './App.css'
import Hero from './components/pageParts/Hero'
import CommunicationTypes from './components/pageParts/CommunicationTypes'
import Challenges from './components/pageParts/Challenges'
import LeadershipAndPractices from './components/pageParts/LeadershipAndPractices'


function App() {
  
  return (
    <div className="App">
      <Hero />
      <CommunicationTypes />
      <Challenges/>
      <LeadershipAndPractices/>
    </div>
  )
}

export default App
