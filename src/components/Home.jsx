import React, { useState, useEffect } from 'react'
import classes from './styles/Home.module.scss';

import Typewriter from 'typewriter-effect';
import '../index.css'




const Home = ({ isDarkModeEnabled, themeToggler }) => {

    return (
        <section id='home__section' className={`section_box ${classes.home}`}>
            <div className={classes.intro__container}>
                <h1 className={classes.intro__hi}><span className={classes.hi}>👋</span>Hi, <span className={classes.intro__name}>my name is Taki</span></h1>
                <h3 className={classes.intro__i_am_a}>I am   <span><Typewriter
                    options={{
                        strings: ['a Front End Developer', 'a Freelancer', 'learning Backend', 'thus learning Full Stack Web Development as well'],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 40,

                    }}
                /></span></h3>
                <button onClick={() => window.open('https://onedrive.live.com/download?cid=29CCC634CB6D42A7&resid=29CCC634CB6D42A7%211704&authkey=AHQqeLPIGKHNonw&em=2')} className={`button-82-pushable ${classes.cvBtn}`}>
                    <span className="button-82-shadow"></span><span className="button-82-edge"></span>
                    <span className="button-82-front text">Download CV</span>
                </button>
            </div>

        </section>
    )
}

export default Home