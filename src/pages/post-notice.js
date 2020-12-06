import React from "react"
import { Alert, Button } from "react-bootstrap"
import Date from "../components/date"

const NoticeBoard = () => (
  <>
    <h1>Notice.</h1>
    <hr></hr>
    <div>
      <Alert variant="success">
        <Alert.Heading>M.Ed. Entrance Test 2020</Alert.Heading>
        <p>06.12.2020 — M.Ed.</p>
        <hr />
        <p className="mb-0">
          <a href="../admit-card/">
            <Button variant="outline-dark" size="lg" block>
              Download Admit Card for MET 2020
            </Button>
          </a>
        </p> <br />
        <p className="mb-0">
          <a href="../documents/MEd/met-exam-notice.pdf">
            <Button variant="outline-dark" size="lg" block>
              Examination Notice MET 2020
            </Button>
          </a>
        </p>
      </Alert>
    </div>
    <hr></hr>
    <br></br>
    <div>
      <Alert variant="primary">
        <Alert.Heading>M.Ed. Admission Notice & Information Brochure (2020)</Alert.Heading>
        <p>19.10.2020 — M.Ed.</p>
        <hr />
        <p className="mb-0">
          <a href="../documents/MEd/InformationBrochureMET-2020.pdf">
            <Button variant="outline-dark" size="lg" block>
              Information Brochure MET-2020
            </Button>
          </a>
        </p><br />
        <p className="mb-0">
          <a href="../documents/MEd/AdmissionNoticeMET-2020.pdf">
            <Button variant="outline-dark" size="lg" block>
              Admission Notice MET-2020
            </Button>
          </a>
        </p><br />
        <p className="mb-0">
          <a href="../documents/MEd/ApplicationFormMET-2020.pdf">
            <Button variant="outline-dark" size="lg" block>
              Application Form MET-2020
            </Button>
          </a>
        </p>
      </Alert>
    </div>
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
