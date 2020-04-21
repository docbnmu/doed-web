import React from "react"
import NoticeBoard from "./post-notice"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Notice = () => (
  <Layout pageInfo={{ pageName: "Notice" }}>
    <SEO title="Notice" />
    <NoticeBoard />
  </Layout>
)

export default Notice
