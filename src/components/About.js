import React from "react"
import atom from "../images/atom.svg"
import astronaut from "../images/atronaut.svg"
import milleniumFalcon from "../images/Millennium-Falcon.svg"
import telescope from "../images/telescope.svg"
import AboutStyles from "./About.module.scss"

const About = ({ height, id }) => {
  return typeof window !== `undefined` ? (
    <div>
      <div style={height} id={id} className={AboutStyles.flex}>
        <div className="wow fadeInDown">
          <h2 className={AboutStyles.headerTwo}>About</h2>
        </div>
        <div className={AboutStyles.alignStart}>
          <div className={AboutStyles.skills}>
            <h3 className="wow  fadeInLeft">Frontend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div>
                <ul className="wow  fadeInLeft">
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
                <div className="wow  fadeInRight">
                  <img src={atom} alt="atom" width="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3 className="wow  fadeInLeft">Backend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow  fadeInLeft">
                  <img
                    className={AboutStyles.rotateMilleniumFalcon}
                    src={milleniumFalcon}
                    alt="milleniumFalcon"
                    width="200px"
                  />
                </div>
              </div>
              <ul className="wow  fadeInRight">
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
            <h3 className="wow  fadeInLeft">Databases</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <ul className="wow  fadeInLeft">
                  <li>Oracle</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Cloud Firestore</li>
                </ul>
              </div>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow  fadeInRight">
                  <img
                    src={astronaut}
                    alt="astronaut"
                    width="200px"
                    className={AboutStyles.rotateAstronaut}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3 className="wow  fadeInLeft">Others</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow  fadeInLeft">
                  <img src={telescope} alt="telescope" width="200px" />
                </div>
              </div>
              <div className={AboutStyles.verticalFlex}>
                <ul className="wow  fadeInRight">
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
  ) : null
}

export default About
