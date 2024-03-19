import classes from './styles/Home.module.scss';

import Typewriter from 'typewriter-effect';
import '../index.css'




const Home = () => {

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
                <button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1-v4Quko4_Op86wuLok9pBz9Op6ufcDRy')} className={`button-82-pushable ${classes.cvBtn}`}>
                    <span className="button-82-shadow"></span><span className="button-82-edge"></span>
                    <span className="button-82-front text">Download CV</span>
                </button>
            </div>

        </section>
    )
}

export default Home