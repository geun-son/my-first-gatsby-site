import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { SEO } from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = () => {
    <SEO />
}

export default BlogPage