import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  /*const data = useStaticQuery(graphql`
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
  `)*/

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((d, i) => {
          return (
            <li key={i} className={blogStyles.post}>
              <Link to={`blog/${d.node.slug}`}>
                <h2>{d.node.title}</h2>
                <p>{d.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
