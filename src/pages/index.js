import React from "react"
import NoticeBoard from "./post-notice"
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
    <NoticeBoard />
  </Layout>
)
export default IndexPage
