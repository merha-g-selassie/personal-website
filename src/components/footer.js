import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const style = {
    background: {
      backgroundColor: "#252934",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    text: {
      color: "white",
    },
  }
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <footer className={footerStyles.textCenter}>
        <div style={style.background}>
          <div style={style.flex}>
            <a
              href={"https://www.facebook.com/merhawi.ghebreselassie"}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={footerStyles.FooterIcon}
                size={"2x"}
                icon={faFacebook}
                color="white"
              />
            </a>
            <a
              href={"https://twitter.com/GsMerha"}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={footerStyles.FooterIcon}
                size={"2x"}
                icon={faTwitter}
                color="white"
              />
            </a>
            <a
              href={"https://www.instagram.com/merha_gs/"}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={footerStyles.FooterIcon}
                size={"2x"}
                icon={faInstagram}
                color="white"
              />
            </a>
            <a
              href={"https://www.linkedin.com"}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={footerStyles.FooterIcon}
                size={"2x"}
                icon={faLinkedin}
                color="white"
              />
            </a>
            <a
              href={"https://github.com/merha-g-selassie/"}
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={footerStyles.FooterIcon}
                size={"2x"}
                icon={faGithub}
                color="white"
              />
            </a>
          </div>
          <p className={footerStyles.name}>
            Created by {data.site.siteMetadata.author}, © 2019
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
