import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageInfo={{ pageName: "404" }}>
    <SEO title="404: Not found" />
    <h1>Page not found.</h1>
    <p><h2>We can't find what you're looking for.</h2></p>
  </Layout>
)

export default NotFoundPage
