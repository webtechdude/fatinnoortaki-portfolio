import React, { useState } from 'react'
import { FaHome, FaRegUser, FaChartArea, FaBrain, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import classes from "./styles/Navbar.module.scss"
import Scrollspy from "react-scrollspy"
import "../index.css"

const Navbar = () => {
    const [isShowNavItem, setShowNavItem] = useState(false);
    return (
        <header className={`sidebar ${classes.nav__container}`}>
            <nav className={classes.nav}>
                <div className={classes.nav__header}>
                    <a className={classes.nav__brand} href="/">Taki</a>
                    <button className={classes.nav__toggle} onClick={() => setShowNavItem(!isShowNavItem)}>{isShowNavItem ? <FaTimes /> : <FaBars />}</button>
                </div>
                {/*<ul className={classes.nav__list}>*/}
                <Scrollspy className={isShowNavItem ? `${classes.nav__list} ${classes.show_nav__list}` : `${classes.nav__list}`} items={['home__section', 'about__section', 'project__section', 'skills__section', 'contact__section']} currentClassName="is-current">
                    <li onClick={() => { window.location = "#home__section" }} className={classes.nav__item}><a href="#home__section"><FaHome /><span className={classes.hiddenText}>Home</span></a></li>
                    <li onClick={() => { window.location = "#about__section" }} className={classes.nav__item}><a href="#about__section"><FaRegUser /><span className={classes.hiddenText}>About</span></a></li>
                    <li onClick={() => { window.location = "#project__section" }} className={classes.nav__item}><a href="#project__section"><FaChartArea /><span className={classes.hiddenText}>Project</span></a></li>
                    <li onClick={() => { window.location = "#skills__section" }} className={classes.nav__item}><a href="#skills__section"><FaBrain /><span className={classes.hiddenText}>Skills</span></a></li>
                    <li onClick={() => { window.location = "#contact__section" }} className={classes.nav__item}><a href="#contact__section"><FaEnvelope /><span className={classes.hiddenText}>Contact</span></a></li>
                </Scrollspy>
                {/*</ul>*/}
            </nav>
        </header >
    )
}

export default Navbar