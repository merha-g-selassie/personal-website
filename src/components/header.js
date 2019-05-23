import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import "./header.module.scss"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleScroll = e => {
    console.log(e)
  }

  return (
    <header
      className={headerStyles.header}
      id="foo"
      onScroll={() => {
        console.log("onscroll")
      }}
    >
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/#home"
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/#portfolio"
              activeClassName={headerStyles.activeNavItem}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/#contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
