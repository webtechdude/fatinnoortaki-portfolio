import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import Footer from './Footer'
import "../index.css"

const Contentcontainer = () => {
    return (
        <section>
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </section>
    )
}

export default Contentcontainer