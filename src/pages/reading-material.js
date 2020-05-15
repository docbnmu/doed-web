import React from "react"
import { Nav, Accordion, Card, Button, Badge, Alert } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Date from "../components/date"

const ReadingMaterial = () => (
  <React.Fragment>
    <Layout pageInfo={{ pageName: "Reading Material" }}>
      <SEO title="Reading Material" />
      <h4>B.Ed.</h4>
      <div>
        <Accordion defaultActiveKey="0">
        <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">First</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#second">Second</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#third" >
          Third
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  
 
</Card>
        </Accordion>
      </div>
      <hr></hr>
      <br></br>
      <h4>M.Ed.</h4>
      <div>
        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Semester I
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Semester II
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>No content yet. </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Semester III
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Semester IV
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
               
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <hr></hr>
      <br></br>

    </Layout>
  </React.Fragment>
)

export default ReadingMaterial
