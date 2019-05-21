import { graphql, useStaticQuery } from "gatsby"
import React from "react"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <footer>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
      </footer>
    </div>
  )
}

export default Footer
