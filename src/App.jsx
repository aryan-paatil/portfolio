import { useState } from 'react'
import './App.css'
import './design/nav.css'
import NavBar from './Components/NavBar'
import Intro from './components/intro'
import Projects from './components/Projects'
function App() {
  return (
<>
    <NavBar/>
    <Intro/>
    <Projects/>
</>
  )
}

export default App
