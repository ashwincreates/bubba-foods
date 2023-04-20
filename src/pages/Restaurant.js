import { Col, Container, Row } from "react-bootstrap"
import Gallery from "./Gallery"
import ReviewPhotoMenu from "./ReviewPhotoMenu"

function Restaurant() {
    return (
        <>
            <Container fluid>
        <Row className="justify-content-center">
          <Col xs={9}>
            <Gallery />
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={5} className="text-right ml-auto">
            <h2>Behrouz Cafe</h2>
          </Col>
        </Row>
      </Container>
      <ReviewPhotoMenu />
      </>
    )
}

export default Restaurant