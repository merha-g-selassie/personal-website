import { Link } from "gatsby"
import React from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header
      className={headerStyles.header}
      id="foo"
      onScroll={() => {
        console.log("onscroll")
      }}
    >
      <nav className={headerStyles.nav}>
        <div className={headerStyles.flex}>
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
            {/* <li>
              <Link
                className={headerStyles.navItem}
                to="#about"
                activeClassName={headerStyles.activeNavItem}
              >
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
            </li> */}
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
          <label htmlFor="burger" style={{ opacity: "0" }}>
            burger
          </label>
          {/* <input
            name="burger"
            id="burger"
            className={
              !checked
                ? headerStyles.burgerChecked
                : headerStyles.burgerUnchecked
            }
            type="checkbox"
            onChange={onHandleChecked}
          /> */}
        </div>
      </nav>
    </header>
  )
}

export default Header
