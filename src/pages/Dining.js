import { useState } from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FoodItemModal from "../components/FoodItemModal";
import ItemCard from "../components/ItemCard";
import Section from "../components/Section";

function Dining() {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={9}>
                        <Section title="Near You">
                            <Link to={'restaurant'} className="text-decoration-none">
                                <ItemCard/>
                            </Link>
                        </Section>
                        <Section title="All Restaurants">
                            <Link to='restaurant' relative='path' className="text-decoration-none">
                                <ItemCard/>
                            </Link>
                        </Section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dining