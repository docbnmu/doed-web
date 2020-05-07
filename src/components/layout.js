/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        currentBuildDate {
          currentDate
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col justify-content-center">
              <footer>
                <span>
                  <section>
                    <h5>
                      University's website: bnmu.ac.in &bull; Laloo Nagar,
                      Madhepura (852113) Bihar.
                    </h5>
                  </section>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
