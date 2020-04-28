import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import { Spinner, Button } from "react-bootstrap"
import GooglePhotos from "../../static/images/google-photos.svg"

const PhotoGallery = () => (
  <Layout pageInfo={{ pageName: "Photo Gallery" }}>
    <SEO title="Photo Gallery" />
    <h1>Photo Gallery</h1>
    <hr></hr>
    <br></br>
    <a href="/#">
      <Button variant="outline-dark" size="lg" block>
        Open with
        <img
          class="img-fluid lazy"
          src={GooglePhotos}
          alt="Google Photos"
        ></img>
      </Button>
    </a>
    <hr></hr>
    <h6 align="center">
      Click on any image to preview. <Spinner animation="grow" size="sm" />
    </h6>

    <br></br>
    <Gallery />
    <hr></hr>
    <br></br>
  </Layout>
)
export default PhotoGallery
