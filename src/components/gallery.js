import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0105.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0110.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0116.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20200114-WA0004.jpg",
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0106.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0111.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190905-WA0225.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20200126-WA0056.jpg",
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0107.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0113.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190905-WA0266.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20200126-WA0057.jpg",
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0108.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0114.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20191025-WA0188.jpg",
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0109.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20190709-WA0115.jpg", 
    "https://ik.imagekit.io/85x/https://doedbnmu.in/images/gallery/IMG-20200113-WA0038.jpg",
    ],
  }

  renderImages = () => {
    let photoIndex = -1
    const { images } = this.state

    return images.map((imageSrc) => {
      photoIndex++
      const privateKey = photoIndex
      return (
        <Col md="4" className="inline-flex" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="#"
              loading="lazy"
              className="lazy img-fluid rounded-lg"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </Col>
      )
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state
    return (
      <Container className="mt-5">
        <div className="container-fluid">
          <Row>{this.renderImages()}</Row>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Container>
    )
  }
}

export default LightboxPage
