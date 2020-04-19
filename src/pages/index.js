import React from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImgA from "../images/gallery/IMG-20190709-WA0106.jpg"
import ImgB from "../images/gallery/IMG-20190709-WA0110.jpg"
import ImgC from "../images/gallery/IMG-20190905-WA0225.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO
      title="Home - University Department of Education"
      keywords={[`doedbnmu`, `bnmu`, `madhepura`]}
    />
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src={ImgA} class="img-fluid lazy" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid lazy" src={ImgB} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-fluid lazy" src={ImgC} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
    <hr>
    </hr>
    <br></br>
    <br></br>
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
export default IndexPage
