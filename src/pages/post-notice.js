import React from "react"
import { Alert, Button } from "react-bootstrap"
import Date from "../components/date"

const NoticeBoard = () => (
  <>
    <h1>Notice.</h1>
    <hr></hr>
    <br></br>
    <div>
      <Alert variant="success">
        <Alert.Heading>List of admitted students in B.Ed.</Alert.Heading>
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

    <Date />
  </>
)
export default NoticeBoard
