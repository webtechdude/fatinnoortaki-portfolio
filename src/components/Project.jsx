import React, { memo, useEffect, useState } from 'react'
import classes from "./styles/Project.module.scss"
import '../index.css'
import ProjectContent from './ProjectContent'
import { BsChevronDown } from "react-icons/bs"



const Project = () => {
    const [project, setProject] = useState([]);
    const loadRepo = async () => {
        let pro = await fetch("https://api.github.com/users/webtechdude/repos");
        let fetchData = await pro.json()
        let slicedData = fetchData.slice(0, 6)
        setProject(slicedData)
    }

    useEffect(() => {
        loadRepo();
    }, [])

    return (
        <section id='project__section' className={`section_box ${classes.project}`}>
            <h1 className='section__heading'>Project Section</h1>
            <div className={classes.project__box}>
                {
                    project.map(({ id, html_url, name }) => {
                        return (
                            <ProjectContent key={id} name={name} html_url={html_url} />
                        )

                    })
                }
            </div>
            <a className={classes.moreBtn} href="https://github.com/webtechdude?tab=repositories"><BsChevronDown /></a>
        </section>
    )

}

export default memo(Project);