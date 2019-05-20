import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <div>
      <header>
        <h1>hello world</h1>
        <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ol>
        </nav>
      </header>
    </div>
  )
}

export default Header
