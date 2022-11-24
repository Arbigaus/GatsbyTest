import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
            <Layout location={location} title={siteTitle}>
                <h1>Test</h1>
                <p>Page test</p>
            </Layout>
            )
}

export const Head = () => <Seo title="Page Test" />

export default NotFoundPage

export const pageQuery = graphql`
query {
site {
siteMetadata {
title
}
}
}
`
