import React from 'react'
import { FaHome, FaRegUser, FaChartArea, FaBrain, FaEnvelope } from 'react-icons/fa'
import classes from "./styles/Navbar.module.scss"

const Navbar = () => {
    return (
        <header className={classes.nav__container}>
            <nav className={classes.nav}>
                <a className={classes.nav__brand} href="/">Taki</a>
                <ul className={classes.nav__list}>
                    <li className={classes.nav__item}><a href="#here"><FaHome /><span className={classes.hiddenText}>Home</span></a></li>
                    <li className={classes.nav__item}><a href="#about"><FaRegUser /><span className={classes.hiddenText}>About</span></a></li>
                    <li className={classes.nav__item}><a href="#project"><FaChartArea /><span className={classes.hiddenText}>Project</span></a></li>
                    <li className={classes.nav__item}><a href="#skills"><FaBrain /><span className={classes.hiddenText}>Skills</span></a></li>
                    <li className={classes.nav__item}><a href="#contact"><FaEnvelope /><span className={classes.hiddenText}>Contact</span></a></li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar