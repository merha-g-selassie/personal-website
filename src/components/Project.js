import React, { useState } from "react"
import yelpcamp from "../images/yelpcamp.png"
import ProjectStyle from "./Project.module.scss"

const Project = ({ projectName }) => {
  const [show, setShow] = useState(false)

  const Modal = <div>hello</div>

  const showModal = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <div className={ProjectStyle.imgWrap}>
      <img className={ProjectStyle.imgImg} src={yelpcamp} alt="project" />
      <div className={ProjectStyle.imgDescription}>
        <h3>{projectName}</h3>
        <button onClick={showModal} className={ProjectStyle.button}>
          See more
        </button>
      </div>
    </div>
  )
}

export default Project
