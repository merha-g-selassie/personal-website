import React from "react"
import Particles from "react-particles-js"
import arrow from "../images/arrow.svg"
import { smoothScroll } from "../utils"
import HomeStyles from "./Home.module.scss"

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
      <div>
        <div className={HomeStyles.flex}>
          <p>
            Hello, I'm{" "}
            <span className="wow fadeIn" style={{ color: "#03f4e0" }}>
              Merhawi Ghebre Selassie
            </span>
            .
          </p>
          <p>A full-stack developer.</p>
          <div className="wow fadeInUp" style={{ zIndex: 1 }}>
            <button
              className={HomeStyles.button}
              onClick={() => smoothScroll.scrollTo("about")}
            >
              View more
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Home
