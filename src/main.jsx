import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navBar.jsx'
import AboutMe from './components/aboutMe.jsx'
import Conocimientos from './pages/conocimientos.jsx'
import Proyectos from './pages/proyectos.jsx'
import ExperienceCard from './pages/experienceCard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <AboutMe />
    <Conocimientos />
    <Proyectos />
    <ExperienceCard />
  </StrictMode>,
)
