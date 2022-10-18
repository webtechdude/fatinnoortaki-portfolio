import React, { memo, useEffect, useState } from 'react'
import classes from "./styles/Project.module.scss"
import '../index.css'
import ProjectContent from './ProjectContent'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { ProjectArr } from './ProjectArr'




const Project = () => {
    const [project, setProject] = useState([])
    const [moreBtn, setMoreBtn] = useState(<BsChevronDown />)
    const [isUp, setIsUp] = useState(false)
    const [filterType, setFilterType] = useState([])



    const filterClick = async (language) => {
        setMoreBtn(<BsChevronUp />)
        const clickedFiltered = ProjectArr.filter(({ lang }) => {
            return lang.includes(language);
        })
        if (language === "all") {
            setProject(ProjectArr)
            setIsUp(true)
        }
        else {
            setProject(clickedFiltered)
            setIsUp(true)
        }
    }

    useEffect(() => {
        const storeType = ProjectArr.map(({ lang }) => [...lang])
        setFilterType(["all", ...new Set(storeType.flat(Infinity))])
        const initialLoad = ProjectArr.slice(0, 3)
        setProject(initialLoad)
    }, [])

    return (
        <section id='project__section' className={`section_box ${classes.project}`}>
            <h1 className='section__heading'>My Projects</h1>
            <div className={classes.project__filter}>
                {
                    filterType.map((language, index) => {
                        return <button key={index} onClick={() => filterClick(language)} className={classes.button_filter}>{language}</button>
                    })
                }
            </div>
            <div className={classes.project__box}>
                {
                    project.map(({ id, name, description, imgUrl, lang, repoUrl, url }) => {
                        return (
                            <ProjectContent key={id} name={name} description={description} imgUrl={imgUrl} lang={lang} repoUrl={repoUrl} url={url} />
                        )

                    })
                }
            </div>
            <button className={classes.moreBtn} onClick={async () => {
                if (isUp) {
                    setMoreBtn(<BsChevronDown />);
                    setProject((project) => project.slice(0, 3))
                    setIsUp(false)
                } else {
                    setProject(ProjectArr)
                    setMoreBtn(<BsChevronUp />)
                    setProject(ProjectArr)
                    setIsUp(true)
                }
            }}>
                {moreBtn}
            </button>
        </section>
    )

}

export default memo(Project);

    // const loadRepo = async () => {
    //     let pro = await fetch("https://api.github.com/users/webtechdude/repos");
    //     let fetchData = await pro.json()
    //     let slicedData = fetchData.slice(0, 6)
    //     setProject(slicedData)
    // }