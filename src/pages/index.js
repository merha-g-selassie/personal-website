import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Head from "../components/head"
import Header from "../components/header"
import Home from "../components/Home"
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
  const onScrollSpy = () => {
    var section = document.querySelectorAll(".section")
    var sections = {}
    var i = 0

    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop
    })

    window.onscroll = function() {
      var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop

      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector(".active").setAttribute("class", " ")
          document
            .querySelector("a[href*=" + i + "]")
            .setAttribute("class", "active")
        }
      }
    }
  }
  onScrollSpy()
  return (
    <div id="scroll" onScroll={scroll}>
      <Head title="Home" />
      <Header />
      <Home height={sectionHeight} id="home" />
      <About height={sectionHeight} id="about" />
      <Contact height={sectionHeight} id="contact" />
    </div>
  )
}

export default IndexPage
