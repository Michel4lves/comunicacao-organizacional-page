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
      <Footer/>
    </div>
  )
}

export default App
