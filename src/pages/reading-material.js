import React from "react"
import { Nav, Accordion, Card, Button, Badge, Alert, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Date from "../components/date"

const ReadingMaterial = () => (
  <React.Fragment>
    <Layout pageInfo={{ pageName: "Reading Material" }}>
      <SEO title="Reading Material" />
      <h4>B.Ed.</h4>
      <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
     Year I
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="i1">
      Sem I
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="i1">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="i2">
      Sem II
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="i2">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    Year II
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Accordion defaultActiveKey="2">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="ii1">
      Sem I
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="ii1">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Sem II
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Year III
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body><Accordion defaultActiveKey="3">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Sem I
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Sem II
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Card.Body>
    </Accordion.Collapse>
  </Card>
  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
     Year IV
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body><Accordion defaultActiveKey="4">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Sem I
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Sem II
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Card.Body>
    </Accordion.Collapse>
  </Card>
 
</Accordion>
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
    <Container>
        
    </Container>
    </Layout>
  </React.Fragment>
)

export default ReadingMaterial
