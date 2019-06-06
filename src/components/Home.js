import React from "react"
import Particles from "react-particles-js"
import arrow from "../images/arrow.svg"
import HomeStyles from "./Home.module.scss"
import { smoothScroll } from "../utils"

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
  return typeof window !== `undefined` ? (
    <div id={id} style={height} className={HomeStyles.flex}>
      <Particles params={particlesOptions} />
      <div className="wow fadeInUp">
        <div className={HomeStyles.flex}>
          <p>
            Hello, I'm{" "}
            <span style={{ color: "#03f4e0" }}>Merhawi Ghebre Selassie</span>.
          </p>
          <p>A full-stack developer.</p>
          <a
            className={HomeStyles.button}
            onClick={() => smoothScroll.scrollTo("about")}
          >
            View more
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  ) : null
}

export default Home
