import React, { useEffect } from "react"
import Particles from "react-particles-js"
import arrow from "../images/arrow.svg"
import HomeStyles from "./Home.module.scss"
import Alert from "react-bootstrap/Alert"

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import WOW from "wowjs"

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
}

const Home = ({ height, id }) => {
  useEffect(() => {
    const wow = new WOW.WOW()
    wow.init()
  })
  return (
    <div id={id} style={height} className={HomeStyles.flex}>
      <div className={HomeStyles.position}>
        <Alert variant="warning">
          <FontAwesomeIcon
            size={"2x"}
            icon={faExclamationTriangle}
            color="white"
          />
          <span>Website under construction</span>
        </Alert>
      </div>

      <Particles params={particlesOptions} />
      <div className="wow fadeInUp">
        <div className={HomeStyles.flex}>
          <p>
            Hello, I'm{" "}
            <span style={{ color: "#03f4e0" }}>Merhawi Ghebre Selassie</span>.
          </p>
          <p>A full-stack developer.</p>
          <a className={HomeStyles.button} href="#about">
            View more
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
