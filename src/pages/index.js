import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"
import Card from "../components/card"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Card/>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "idea"}}}) {
    nodes {
      frontmatter {
        title
      }
    }
  }
}
`

export default IndexPage
