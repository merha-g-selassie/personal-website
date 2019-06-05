import React from "react"
import AboutStyles from "./About.module.scss"

const About = ({ height, id }) => {
  return (
    <div>
      <div style={height} id={id} className={AboutStyles.flex}>
        <h2>About</h2>
        {/*frontend, backend, tooling*/}
        <div className={AboutStyles.alignStart}>
          <div className={AboutStyles.skills}>
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Redux</li>
              <li>Electron</li>
              <li>Android</li>
              <li>Swift</li>
            </ul>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div>
            <h3>Backend</h3>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>PHP</li>
              <li>Laravel</li>
              <li>SQL</li>
              <li>PL/SQL</li>
            </ul>
          </div>
        </div>
        <div className={AboutStyles.alignStart}>
          <div>
            <h3>Databases</h3>
            <ul>
              <li>Oracle</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Cloud Firestore</li>
            </ul>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div>
            <h3>Others</h3>
            <ul>
              <li>Git</li>
              <li>Webpack</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
