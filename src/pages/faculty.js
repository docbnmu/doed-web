import React from "react"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Faculty = () => (
  <Layout pageInfo={{ pageName: "Faculty" }}>
    <SEO title="Faculty" />
    <h3>B.Ed. Staff (Teaching)</h3>
    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Designation</strong>
            </th>
            <th>
              <strong>Contact</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Lalan Prakash Sahni</td>
            <td>Head</td>
            <td>9386606265</td>
          </tr>
          <tr>
            <td>Dr. Pavan Kumar</td>
            <td>Assistant Professor</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mr. Rovins Kumar</td>
            <td>Assistant Professor</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mrs. Ruchi Suman</td>
            <td>Assistant Professor</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mr. Ram Singh Yadav</td>
            <td>Assistant Professor</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mr. Beer Bahadur</td>
            <td>Assistant Professor</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <br></br>
    <hr></hr>
    <h3>M.Ed. Staff (Teaching)</h3>

    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Designation</b>
            </th>
            <th>
              <b>Contact</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dr. Buddha Priya</td>
            <td>Professor & HoD</td>
            <td>7979903189</td>
          </tr>
          <tr>
            <td>Dr. Shivendra Prasad Singh</td>
            <td>Associate Professor </td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mr. Firoz Ahmed Mansuri</td>
            <td>Associate Professor </td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <br></br>
    <hr></hr>
    <h3>Non-teaching Staff</h3>

    <div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Designation</b>
            </th>
            <th>
              <b>Contact</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mr. Santosh Kumar</td>
            <td>Technical Assistant cum Helper</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
    </div>
    <br></br>
    <hr></hr>
  </Layout>
)

export default Faculty
