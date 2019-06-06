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
        {/*frontend, backend, tooling*/}
        <div className={AboutStyles.alignStart}>
          <div className={AboutStyles.skills}>
            <h3 className="wow bounceInLeft">Frontend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div>
                <ul className="wow bounceInLeft">
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
                <div className="wow bounceInRight">
                  <img src={atom} alt="atom" width="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3 className="wow bounceInLeft">Backend</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow bounceInLeft">
                  <img
                    src={milleniumFalcon}
                    alt="milleniumFalcon"
                    width="200px"
                  />
                </div>
              </div>
              <ul className="wow bounceInRight">
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
            <h3 className="wow bounceInLeft">Databases</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <ul className="wow bounceInLeft">
                  <li>Oracle</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Cloud Firestore</li>
                </ul>
              </div>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow bounceInRight">
                  <img src={astronaut} alt="astronaut" width="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={AboutStyles.alignEnd}>
          <div className={AboutStyles.skills}>
            <h3 className="wow bounceInLeft">Others</h3>
            <div className={AboutStyles.skillImgFlex}>
              <div className={AboutStyles.verticalFlex}>
                <div className="wow bounceInLeft">
                  <img src={telescope} alt="telescope" width="200px" />
                </div>
              </div>
              <div className={AboutStyles.verticalFlex}>
                <ul className="wow bounceInRight">
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
