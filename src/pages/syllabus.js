import React from "react"
import { Accordion, Card, Button, Badge } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Syllabus = () => (
  <Layout pageInfo={{ pageName: "Syllabus" }}>
    <SEO title="Syllabus" />
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            M.Ed.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                <a href="../documents/M.Ed.Syllabus.pdf">
                  <Button variant="outline-dark">
                    Syllabus for M.Ed. <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            B.Ed.
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <a href="../documents/B.Ed.Syllabus.pdf">
                  <Button variant="outline-dark">
                    Syllabus for B.Ed. <Badge variant="secondary">PDF</Badge>
                  </Button>
                </a>
              </p>
              <hr></hr>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <hr></hr>
    <br></br>
    <br></br>
  </Layout>
)

export default Syllabus
