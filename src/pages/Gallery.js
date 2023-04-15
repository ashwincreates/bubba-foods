import { Col, Container, Row } from "react-bootstrap";

function Gallery() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={4}>
                        <img width="100%" height={"100%"} style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"></img>
                    </Col>
                    <Col xs={4} >
                        <Row className="h-50">
                            <Col>
                                <img width="100%" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"></img>
                            </Col>
                        </Row>
                        <Row className="h-50">
                            <Col>
                                <img width="100%" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <img width="100%" height="100%" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"></img>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery