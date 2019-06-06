import React, { useEffect } from "react"
import About from "../components/About"
//import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/footer"
import Head from "../components/head"
import Header from "../components/header"
import Home from "../components/Home"
import "./index.scss"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      const wow = new WOW.WOW()
      wow.init()
    }
  })
  const sectionHeight = {
    minHeight: "100vh",
  }

  return (
    // <div id="scroll" onScroll={scroll}>
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <Head title="Home" />
      <Header />
      <Home height={sectionHeight} id="home" />
      <About height={sectionHeight} id="about" />
      <Contact height={sectionHeight} id="contact" />
      <Footer />
    </div>
  )
}

export default IndexPage
