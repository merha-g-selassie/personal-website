import React from "react"
import Head from "../components/head"
import Header from "../components/header"
import Home from "../components/Home"
import "./index.scss"

const IndexPage = () => {
  const sectionHeight = {
    height: "100vh",
    color: "#fff",
  }

  return (
    <div id="scroll" onScroll={scroll}>
      <Head title="Home" />
      <Header />
      <Home height={sectionHeight} id="home" />
      {/* <About height={sectionHeight} id="about" />
      <Contact height={sectionHeight} id="contact" /> */}
    </div>
  )
}

export default IndexPage
