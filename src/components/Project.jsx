import React, { memo, useEffect, useState } from 'react'
import classes from "./styles/Project.module.scss"
import '../index.css'
import ProjectContent from './ProjectContent'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { ProjectArr } from './ProjectArr'



const Project = () => {
    const [project, setProject] = useState([])
    const [moreBtn, setMoreBtn] = useState(<BsChevronDown />)
    const [isSet, setIsSet] = useState(false)

    useEffect(() => {
        const initialLoad = ProjectArr.slice(0, 3)
        setProject(initialLoad)

    }, [])

    return (
        <section id='project__section' className={`section_box ${classes.project}`}>
            <h1 className='section__heading'>My Projects</h1>
            <div className={classes.project__box}>
                {
                    project.map(({ id, name, description, imgUrl, lang, repoUrl, url }) => {
                        return (
                            <ProjectContent key={id} name={name} description={description} imgUrl={imgUrl} lang={lang} repoUrl={repoUrl} url={url} />
                        )

                    })
                }
            </div>
            <a href="javascript:void(0)" className={classes.moreBtn} onClick={async () => {
                setProject(ProjectArr)
                setMoreBtn(<BsChevronUp />)
                setIsSet(true)
                if (isSet) {
                    setMoreBtn(<BsChevronDown />);
                    setProject(ProjectArr.slice(0, 3))
                    setIsSet(false)
                } else {
                    setProject(ProjectArr)
                    setMoreBtn(<BsChevronUp />)
                }

            }}>
                {moreBtn}
            </a>
        </section >
    )

}

export default memo(Project);

    // const loadRepo = async () => {
    //     let pro = await fetch("https://api.github.com/users/webtechdude/repos");
    //     let fetchData = await pro.json()
    //     let slicedData = fetchData.slice(0, 6)
    //     setProject(slicedData)
    // }