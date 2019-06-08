import React from "react"
import Project from "./Project"
import ProjectsStyles from "./Projects.module.scss"

const Projects = ({ id, height }) => {
  return typeof window !== `undefined` ? (
    <div style={height} id={id} className={ProjectsStyles.flex}>
      <div className="wow fadeInDown">
        <h2 className={ProjectsStyles.headerTwo}>Projects</h2>
      </div>
      <div className={ProjectsStyles.container}>
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <Project projectName={"YelpCamp"} />
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <Project projectName={"Robofriends"} />
        </div>
        <div className="wow fadeInUp" data-wow-delay="©3s">
          <Project projectName={"FaceRecognition"} />
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.4s">
          <Project projectName={"YelpCamp"} />
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.5s">
          <Project projectName={"YelpCamp"} />
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.6s">
          <Project projectName={"YelpCamp"} />
        </div>
      </div>
    </div>
  ) : null
}

export default Projects
