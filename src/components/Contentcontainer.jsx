import React from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import classes from './styles/Contentcontainer.module.scss';

const Contentcontainer = () => {
    return (
        <section className={classes.content_container}>
            <About />
            <Project />
            <Skills />
            <Contact />
        </section>
    )
}

export default Contentcontainer