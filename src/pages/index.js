import React from "react"
import Head from "../components/head"
import Home from "../components/Home"
import About from "../components/About"
import Header from "../components/header"
import "./index.scss"

const IndexPage = () => {
  const sectionHeight = {
    height: "100vh",
    color: "#fff",
  }

  const scroll = e => {
    //console.log(e)
    console.log(window.scrollY)
  }
  return (
    <div id="scroll" onScroll={scroll}>
      <Head title="Home" />
      <Header />
      <Home height={sectionHeight} id="home" />
      <About id="about" height={sectionHeight} />
    </div>
  )
}

export default IndexPage
