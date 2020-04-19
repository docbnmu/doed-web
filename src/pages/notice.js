import React from "react"
import Alert from "react-bootstrap/Alert"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "react-bootstrap/Button"

const Notice = () => (
  <Layout pageInfo={{ pageName: "Notice" }}>
    <SEO title="Notice" />
    <h1>Notice.</h1>
    <hr></hr>
    <br></br>
    <div>
      <Alert variant="success">
        <Alert.Heading>
        List of admitted students in B.Ed.
        </Alert.Heading>
        <p>20.03.2020 — B.Ed.</p>
        <hr />
        <p className="mb-0">
          <a href="../documents/Admitted.Students.in.B.Ed.pdf">
            <Button variant="outline-dark" size="lg" block>
              Download list
            </Button>
          </a>
        </p>
      </Alert>
    </div>
    <hr></hr>
  </Layout>
)

export default Notice
