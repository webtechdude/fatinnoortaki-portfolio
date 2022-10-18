import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import Footer from './Footer'
import "../index.css"

const Contentcontainer = ({ isDarkModeEnabled, themeToggler }) => {
    return (
        <section>
            <Home isDarkModeEnabled={isDarkModeEnabled} themeToggler={themeToggler} />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </section>
    )
}

export default Contentcontainer