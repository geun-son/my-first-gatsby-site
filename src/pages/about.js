// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import { SEO } from "../components/seo"
import Layout from '../components/layout'

// Step 2: Define yout component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this site, whick I built with Gatsby.</p>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage

export const Head = () => {
    <SEO />
}