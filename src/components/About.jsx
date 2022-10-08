import React from 'react'
import classes from './styles/About.module.scss';

// import Typewriter from 'typewriter-effect';
import '../index.css'
import profileImg from "../images/myImg.png"
import { BsYoutube } from "react-icons/bs";


const About = () => {


    return (
        <section id='about__section' className={`section_box ${classes.about}`}>
            <h1 className={classes.about__heading}>About me</h1>
            <p className={classes.about__me}>
                <div className={classes.about__me_text}>
                    <p className={classes.about__me_name}>My name is <span style={{ color: "rgb(255, 255, 0)" }}>Fatin Noor Taki</span></p>
                    <p className={classes.about__me_desc}>
                        Saying about me, I got into coding initially due to my extracurricular activities and fell into love with it
                        <br />
                        I am currently a high-school student. After studying my school subjects for a while. I get into learning coding and watch <BsYoutube /> tutorials about programming and stuff...
                    </p>
                </div>
                <div className={classes.about__me_img}>
                    <img src={profileImg} alt="Fatin Noor Taki's" />

                </div>

            </p>



        </section >
    )
}

export default About