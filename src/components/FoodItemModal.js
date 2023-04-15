import { Badge, Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Minus, Plus } from "react-feather";

function FoodItemModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="gap-3">
                <h6 className="m-0">Paradise Biryani</h6>
                <Badge pill className="bg-success"> Vegetarian </Badge>
            </Modal.Header>
            <Modal.Body className="">
                <Card className="flex-row border-0">
                    <Card.Img className="col-4 border rounded-1" variant="left" height={'300px'} style={{ objectFit: 'cover' }} src="https://images.unsplash.com/photo-1589302168068-964664d93dc0" />
                    <Card.Body className="col-8 py-0 justify-content-between d-flex flex-column">
                        <p className="text-muted">Salad and Raita would not be served</p>
                        <Card className="flex-grow-1">
                            <Container>
                                <Row>
                                    <Col>
                                        <h6 className="py-2">Quantity</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                            {
                                                ['Serves 1', 'Full', 'Family Pack'].map(e =>
                                                    <Form.Check
                                                    >
                                                        <Form.Check.Input type='radio' />
                                                        <Form.Check.Label className="d-flex justify-content-between">
                                                            <span>{e}</span>
                                                            <span>+$100</span>
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                )
                                            }
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Row className="mt-3">
                            <Col className="d-flex justify-content-end">
                                <h5>Total $999</h5>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="d-flex gap-2 flex-grow-1" xs={4}>
                                    <Button><Plus size={14}/></Button>
                                    <Form.Control value={1} className="flex-grow"/>
                                    <Button><Minus size={14}/></Button>
                            </Col>
                            <Col className="flex-grow-1 d-flex" xs={8}>
                                <Button className="flex-grow-1">Add to Cart</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    )
}

export default FoodItemModal;