import React from 'react'
import Portfolio from './Portfolio'
import About from './About'
import Navbar from './Navbar'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Portfolio/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main