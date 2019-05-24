import { Link } from "gatsby"
import React, { useState } from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [checked, setChecked] = useState(false)

  const onHandleChecked = e => {
    setChecked(e.target.checked)
  }

  const style = {
    navList: {
      opacity: "1",
    },
  }

  const headerHeight = () => {
    if (window.innerHeight > 500) {
      return "calc(100vh - 55vh"
    } else {
      return "100vh"
    }
  }

  const zIndex = () => {
    return window.innerWidth > 500 ? null : "1"
  }

  return (
    <header
      className={headerStyles.header}
      style={checked ? { height: headerHeight() } : null}
      id="foo"
      onScroll={() => {
        console.log("onscroll")
      }}
    >
      <nav className={headerStyles.nav}>
        <div className={headerStyles.flex}>
          <ul
            className={headerStyles.navList}
            style={checked ? style.navList : { zIndex: zIndex }}
            onClick={() => setChecked(false)}
          >
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
          <span style={{ visibility: "hidden" }}>burger</span>
          <input
            name="burger"
            className={
              !checked
                ? headerStyles.burgerChecked
                : headerStyles.burgerUnchecked
            }
            type="checkbox"
            onChange={onHandleChecked}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
