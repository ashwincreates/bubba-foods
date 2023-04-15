import { Col, Container, Image, Row } from "react-bootstrap";


function Footer() {
    return (
        <>
            <Container style={{height: "100px"}} className="py-5">
                <Row>
                    <Col xs={10} className="mx-auto d-flex justify-content-between">
                        <div>
                            <img className="mb-3" src="/Bubba Foods.png" height={28} alt="logo"/>
                            <p className="fs-6">Copyright Bubba Foods</p>
                        </div>
                        <div className="d-flex gap-2">
                            <a href="#ad">link 1</a>
                            <a href="#ad">link 1</a>
                            <a href="#ad">link 1</a>
                            <a href="#ad">link 1</a>
                            <a href="#ad">link 1</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer