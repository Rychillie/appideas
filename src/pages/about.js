import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"

const md = (data) => {
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  console.log(frontmatter.title)
  return (<div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>)
}

const AboutPage = ({ data }) => (
  <Layout>
    {md({ data })}
  </Layout >
)

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/about/"}}
  ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
}
`

export default AboutPage
