import { Card, Col, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

function Section({title = "title", ...props}) {
    return (
        <>
            <Row>
                <h6 className="py-4">{title}</h6>
            </Row>
            <Row>
                {
                    [1, 2, 3, 4, 5, 6].map((e) =>
                        <Col xs={4} className="pb-4">
                            {props.children}
                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export default Section