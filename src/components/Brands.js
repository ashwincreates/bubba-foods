import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Brands() {
    return (
        <>
            <Row>
                <h6 className='py-4'>Top Brands</h6>
            </Row>
            <Row>
                {
                    [1, 2, 3].map((e) =>
                        <Col>
                            <Link to={`/brand${e}`} className='text-decoration-none'>
                                <Card className="overflow-hidden shadow-sm">
                                    <Card.Img src={`Brand ${e}.png`} style={{objectFit: 'cover'}}/>
                                </Card>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export default Brands