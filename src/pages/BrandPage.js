import { Col, Nav, Row } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import BubbaCarousel from "../components/BubbaCarousel";
import Footer from "../components/Footer";
import Delivery from "./Delivery";

function BrandPage() {
    return (
        <>
            <BubbaCarousel/>
            <Nav variant="tabs" defaultActiveKey="delivery" className="flex justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="delivery">
                    <Link to={"delivery"} className="text-decoration-none">
                      Delivery / Takeaway
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dining">
                    <Link to={"dining"} className="text-decoration-none">
                      Dining / Restaurant
                    </Link>
                  </Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet/>
            <Col style={{height: '50px'}}></Col>
        </>
    )
}

export default BrandPage