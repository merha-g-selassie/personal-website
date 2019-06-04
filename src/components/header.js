import React from "react"
import "./header.module.scss"
import headerStyles from "./header.module.scss"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <>
      <Navbar
        style={{ zIndex: 1 }}
        collapseOnSelect
        expand="md"
        variant="dark"
        className={headerStyles.navBackground}
      >
        <Navbar.Brand className={headerStyles.navHover} href="#home">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={headerStyles.navHover} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
