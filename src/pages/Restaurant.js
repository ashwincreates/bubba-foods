import { Col, Container, Row } from "react-bootstrap"
import Gallery from "./Gallery"

function Restaurant() {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={10}>
                        <Gallery/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Restaurant