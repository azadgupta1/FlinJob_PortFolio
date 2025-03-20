import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home