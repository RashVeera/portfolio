import React from 'react'
import uiIcon from "../assets/uiIcon.png"

const ProjectItem = ({project}) => {
    console.log(project.imageSrc,uiIcon)
  return (
    <div className='projectItemContainer'>
        <img src={project.imageSrc} alt='projectImages'/>
        <span>{project.title}</span>
        <p>{project.description}</p>
        <ul>
        {project.skills.map((skill)=>(
            <li>{skill}</li>
        ))}
        </ul>
        <a className='link' href={`${project.source}`}>Source</a>
    </div>
  )
}

export default ProjectItem