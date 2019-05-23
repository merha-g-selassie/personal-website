import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Merhawi Ghebre Selassie Personal Website"
      />
      <html lang="en" />
    </Helmet>
  )
}

export default Head
