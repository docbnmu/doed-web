import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "react-bootstrap/Card"

const About = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    <SEO title="About" />
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
            <h6>
              <blockquote>
                <p class="has-line-data" data-line-start="0" data-line-end="1">
                  <strong>Bhupendra Narayan Mandal University</strong> also
                  called B. N. Mandal University and in short BNMU is situated
                  at the district headquarter, Madhepura a district in Bihar. It
                  is known for adding glory to the educational atmosphere of
                  this district and it’s surrounding. It is a regional
                  university famous for its quality teaching.
                </p>
              </blockquote>
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <br />
  </Layout>
)

export default About
