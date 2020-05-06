const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)
    const result = await graphql(`
    {
        allMarkdownRemark(
            sort: {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: replacePath(node.fields.slug),
            component: pageTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}
