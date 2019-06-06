import React from "react"
import atom from "../images/atom.svg"
import astronaut from "../images/atronaut.svg"
import milleniumFalcon from "../images/Millennium-Falcon.svg"
import telescope from "../images/telescope.svg"
import AboutStyles from "./About.module.scss"

const About = ({ height, id }) => {
  return (
    <div>
      <div style={height} id={id} className={AboutStyles.flex}>
        <h2 className={AboutStyles.headerTwo}>About</h2>
        {/*frontend, backend, tooling*/}
        <div className={AboutStyles.alignStart}>
          <div className={AboutStyles.skills}>
            <h3>Frontend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div>
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
              <div className={AboutStyles.verticalFlex}>
                <img src={atom} alt="atom" width="200px" />
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3>Backend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <img
                  src={milleniumFalcon}
                  alt="milleniumFalcon"
                  width="200px"
                />
              </div>
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
        </div>
        <div className={AboutStyles.alignStart}>
          <div className={AboutStyles.skills}>
            <h3>Databases</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <ul>
                  <li>Oracle</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Cloud Firestore</li>
                </ul>
              </div>
              <div className={AboutStyles.verticalFlex}>
                <img src={astronaut} alt="astronaut" width="200px" />
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3>Others</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <img src={telescope} alt="telescope" width="200px" />
              </div>
              <div className={AboutStyles.verticalFlex}>
                <ul>
                  <li>Git</li>
                  <li>Webpack</li>
                  <li>Docker</li>
                  <li>Scrum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
