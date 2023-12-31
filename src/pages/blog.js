import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => {
    <SEO />
}

export default BlogPage