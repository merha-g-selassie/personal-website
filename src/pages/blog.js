import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((d, i) => {
          return (
            <li key={i} className={blogStyles.post}>
              <Link to={`blog/${d.node.fields.slug}`}>
                <h2>{d.node.frontmatter.title}</h2>
                <p>{d.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
