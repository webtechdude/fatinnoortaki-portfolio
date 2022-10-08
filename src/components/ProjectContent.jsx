


import React from 'react'
import classes from "./styles/Project.module.scss"
import { RiGitRepositoryLine } from "react-icons/ri"



const ProjectContent = ({ name, html_url }) => {
    // let ourImg = "https://via.placeholder.com/512x310"
    let ourImg = "https://user-images.githubusercontent.com/3369400/133268513-5bfe2f93-4402-42c9-a403-81c9e86934b6.jpeg"
    return (
        <div className={classes.project__content}>
            <div class={classes.overlay}></div>
            <div className={classes.image__box}><img src={ourImg} alt="imagess" /></div>
            <div className={classes.text__box}>
                <p className={classes.project__name}>{name}</p>
                <a title='Link to Repositories' href={html_url} target="_blank" className={`button-50 ${classes.project__url}`}><RiGitRepositoryLine /></a>


            </div>
        </div>
    )
}

export default ProjectContent