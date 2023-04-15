import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Cart() {
    return (
        <Navbar fixed="bottom" className="w-full bg-white border-top shadow-sm">
            <Container>
                    <Button variant="outline-primary">Your Cart</Button>
                    <Button>Checkout</Button>
            </Container>
        </Navbar>
    )
}

export default Cart