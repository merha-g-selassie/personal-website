import React from "react"
import yelpcamp from "../images/yelpcamp.png"
import ProjectStyle from "./Project.module.scss"

const Project = ({ projectName }) => {
  return (
    <div className={ProjectStyle.imgWrap}>
      <img className={ProjectStyle.imgImg} src={yelpcamp} alt="project" />
      <div className={ProjectStyle.imgDescription}>
        <h6>{projectName}</h6>
        <button className={ProjectStyle.button}>See more</button>
      </div>
    </div>
  )
}

export default Project
