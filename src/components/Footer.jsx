import React from 'react'
import classes from './styles/Footer.module.scss'
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className={`${classes.footer}`}>
            <div className={classes.social_section}>
                <a className={classes.social_links} href='https://www.facebook.com/webtechdude/'><BsFacebook /></a>
                <a className={classes.social_links} href='https://www.youtube.com/webtechdude/'><BsYoutube /></a>
                <a className={classes.social_links} href='https://www.instagram.com/webtechdude/'><BsInstagram /></a>
                <a className={classes.social_links} href='https://github.com/webtechdude/'><BsGithub /></a>
            </div>
            <div className={classes.copyright}>
                Designed by <a href="https://github.com/fatinnoortaki">Fatin Noor Taki</a>
            </div>
        </footer>
    )
}

export default Footer