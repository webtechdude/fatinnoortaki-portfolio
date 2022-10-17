import React, { useRef, useState } from 'react';
import classes from './styles/Contact.module.scss'
import emailjs from '@emailjs/browser';
import { AiFillPhone, AiOutlineMail } from "react-icons/ai"



const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm('service_4xx2btk', 'template_ikcmcik', form.current, '74y0_m9sInY0Rd6Ie')
            .then((result) => {
                console.log(result.text);
                setIsLoading(false)
                alert("Your message has been sent")
            }, (error) => {
                console.log(error.text);
                setIsLoading(false)
            });
        e.reset();
    };

    return (
        <section id='contact__section' className={`section_box ${classes.contact}`}>
            <h1 className='section__heading'>Contact Me</h1>
            <div className={classes.contact__text}>If you have any questions, feel free to contact with me</div>
            <div className={classes.contact__container}>
                <div className={classes.contact__item}>
                    <div className={classes.contact__info}>
                        <div className={classes.contact__info_box} onClick={() => {
                            window.open("tel:+880170460267")
                        }}>
                            <AiFillPhone /><span>Click to Call</span>
                        </div>
                        <div className={classes.contact__info_box} onClick={() => {
                            window.open('mailto:official.webtechdude@gmail.com')
                        }}>
                            <AiOutlineMail /><span>Click to Email</span>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name</label>
                    <input id='name' required type="text" name="user_name" />
                    <label htmlFor="email">Email</label>
                    <input id='email' required type="email" name="user_email" />
                    <label htmlFor="message">Message</label>
                    <textarea id='message' required name="message" rows="8" />
                    <button disabled={isLoading} type='submit' className={`${classes.submitBtn}`}>
                        Send Email
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact