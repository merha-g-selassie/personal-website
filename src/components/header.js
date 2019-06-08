import React, { useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { smoothScroll } from "../utils"
import "./header.module.scss"
import headerStyles from "./header.module.scss"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleSmoothScroll = to => {
    smoothScroll.scrollTo(to)

    if (to === "home") {
      setToggle(false)
    } else {
      setToggle(!toggle)
    }
  }

  return (
    <>
      <Navbar
        style={{ zIndex: 2 }}
        collapseOnSelect
        expand="md"
        variant="dark"
        className={headerStyles.navBackground}
        onToggle={setToggle}
        expanded={toggle}
        sticky="top"
      >
        <Navbar.Brand
          className={headerStyles.navHover}
          onClick={() => handleSmoothScroll("home")}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => handleSmoothScroll("about")}
              className={headerStyles.navHover}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handleSmoothScroll("projects")}
              className={headerStyles.navHover}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={headerStyles.navHover}
              onClick={() => handleSmoothScroll("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
