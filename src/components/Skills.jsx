import React from 'react'

import classes from "./styles/Skills.module.scss";
import '../index.css'
import { DiHtml5, DiCss3, DiJsBadge, DiPhp, DiNodejsSmall, DiBootstrap, DiJqueryLogo, DiReact, DiMongodb, DiMysql } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { IconContext } from 'react-icons';


const Skills = () => {
    return (
        <section id='skills__section' className={`section_box ${classes.skills}`}>
            <h1 className='section__heading'>My Skills</h1>
            <div className={classes.skills__container}>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#d84924", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiHtml5 /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>HTML</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#3492cb", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiCss3 /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>CSS</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#6e10ea", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiBootstrap /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>Bootstrap</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#ead41c", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiJsBadge /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>JavaScript</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#0863a2", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiJqueryLogo /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>JQuery</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#7175aa", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiPhp /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>PHP</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#005a81", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiMysql /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>MySQL</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#5ccfee", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiReact /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>React</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#3e823b", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiNodejsSmall /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>NodeJS</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#7b7b7b", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><SiExpress /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>Express</p>
                </div>
                <div className={classes.skills__item}>
                    <IconContext.Provider value={{ style: { color: "#3d9436", fontSize: "6rem" } }}>
                        <div className={classes.icon_container}><DiMongodb /></div>
                    </IconContext.Provider>
                    <p className={classes.skills__name}>MongoDB</p>
                </div>
            </div>
        </section>
    )
}

export default Skills