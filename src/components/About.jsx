import React, { useState } from 'react'
import classes from './styles/About.module.scss';

// import Typewriter from 'typewriter-effect';
import '../index.css'
import profileImg from "../images/myImg.png"
import { BsYoutube } from "react-icons/bs";


const About = () => {

    const [colorMenu, setColorMenu] = useState({
        backgroundColor: "inherit",
        color: "inherit"
    })
    return (
        <section id='about__section' className={`section_box ${classes.about}`}>
            <h1 className="section__heading">About me</h1>
            <p className={classes.about__me}>
                <div className={classes.about__me_box}>
                    <div className={classes.about__me_heading}><span onClick={() => {
                        setColorMenu({
                            backgroundColor: "rgba(255,0,0,0.3)",
                            color: "rgba(0,255,0,0.8)",

                        })
                    }}>🔴</span><span onClick={() => {
                        setColorMenu({
                            backgroundColor: "rgba(255,255,0,0.3)",
                            color: "rgba(0, 10, 20, 0.8)",

                        })
                    }}>🟡</span><span onClick={() => {
                        setColorMenu({
                            backgroundColor: "rgba(0,255,0,0.3)",
                            color: "rgba(100,0,0,0.8)",

                        })
                    }}>🟢</span></div>
                    <div className={classes.about__me_text} style={colorMenu}>
                        <p className={classes.about__me_name}>My name is <span style={{ color: "rgb(255, 255, 0)" }}>Fatin Noor Taki</span></p>
                        <div className={classes.about__me_desc}>
                            Talking about me, I got into coding initially due to my extracurricular activities and fell into love with it
                            <br />
                            I am currently a high-school student. After studying my school subjects for a while, I get back to learn coding and watch <BsYoutube /> tutorials about programming and stuff...
                        </div>
                    </div>
                </div >
                <div className={classes.about__me_img}>
                    <img src={profileImg} alt="Fatin Noor Taki's" />

                </div>

            </p >



        </section >
    )
}

export default About