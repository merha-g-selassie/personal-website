import React from "react"
import Particles from "react-particles-js"
import HomeStyles from "./Home.module.scss"
import Layout from "../components/layout"
import arrow from "../images/arrow.svg"

const particlesOptions = {
  particles: {
    number: {
      value: 50,
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
  return (
    <div id={id} style={height} className={HomeStyles.flex}>
      <Particles params={particlesOptions} />
      <div className={HomeStyles.flex}>
        <p>Hello, I'm Merhawi Ghebre Selassie.</p>
        <p>A full-stack developer based in Neuchâtel, Switzerland</p>
        <a className={HomeStyles.button} href="#about">
          View more
          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </div>
  )
}

export default Home
