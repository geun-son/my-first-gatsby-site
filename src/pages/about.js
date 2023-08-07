// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"
import { SEO } from "../components/seo"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define yout component
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this site, whick I built with Gatsby.</p>
            <Link to="/">Back to Home</Link>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/m3 touring front side.jpeg"
            />
        </Layout>
    )
}

// Step 3: Export your component
export default AboutPage

export const Head = () => {
    <SEO />
}