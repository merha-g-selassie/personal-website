import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        contact me at{" "}
        <a
          href="https://www.google.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          bla bla bla
        </a>
      </p>
    </Layout>
  )
}

export default Contact
