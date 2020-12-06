import React from "react"
import NoticeBoard from "./post-notice"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Marquee from "./marquee"
const ImgA = "https://ik.imagekit.io/85x/https://doed.now.sh/images/gallery/IMG-20190709-WA0106.jpg"
const ImgB = "https://ik.imagekit.io/85x/https://doed.now.sh/images/gallery/IMG-20190709-WA0110.jpg"
const ImgC = "https://ik.imagekit.io/85x/https://doed.now.sh/images/gallery/IMG-20190905-WA0225.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO title="Home" keywords={[`doedbnmu`, `bnmu`, `madhepura`]} />
    <Marquee />
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
    <hr></hr>
    <br></br>
    <br></br>
    <NoticeBoard />
  </Layout>
)
export default IndexPage
