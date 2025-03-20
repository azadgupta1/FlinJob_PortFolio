import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Project'

function LandingPage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default LandingPage