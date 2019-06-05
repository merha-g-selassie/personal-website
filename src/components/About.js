import React from "react"
import AboutStyles from "./About.module.scss"

const About = ({ height, id }) => {
  return (
    <div>
      <div style={height} id={id} className={AboutStyles.flex}>
        <h2>About</h2>
        {/*frontend, backend, tooling*/}
        <div className={AboutStyles.alignStart}>
          <h3>Frontend</h3>
        </div>
        <div className={AboutStyles.alignEnd}>
          <h3>Backend</h3>
        </div>
      </div>
    </div>
  )
}

export default About
