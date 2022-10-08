import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import classes from './styles/Contentcontainer.module.scss';
import "../index.css"

const Contentcontainer = () => {
    return (
        <section className={`content_box ${classes.content_container}`}>
            <Home />
            <About />
            <Project />
            <Skills />
            <Contact />
        </section>
    )
}

export default Contentcontainer