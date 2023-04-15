import { useState } from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import FoodItemModal from "../components/FoodItemModal";
import ItemCard from "../components/ItemCard";
import Section from "../components/Section";

function Delivery() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
        <Container fluid>
            <Row>
                <Col xs={3} className="border-end">
                    <h5 className="p-3">Menu</h5>
                    <Nav className="flex flex-column">
                        <Nav.Item>
                            <Nav.Link>Today's Special</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Today's Special</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Today's Special</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Today's Special</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={9}>
                    <Section title="Today's Special">
                        <ItemCard/>
                    </Section>
                    <Section title="Festive Special">
                        <ItemCard/>
                    </Section>
                </Col>
            </Row>
        </Container>
        <FoodItemModal show={modalShow}/>
        </>
    )
}

export default Delivery