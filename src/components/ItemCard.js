import { Badge, Card } from "react-bootstrap"
import { Star } from "react-feather"

function ItemCard() {
    return (
        <>
            <Card>
                <Card.Img variant="top" style={{objectFit: 'cover'}} src="https://images.unsplash.com/photo-1589302168068-964664d93dc0" height="200px" />
                <Card.Body>
                <div className="d-flex flex-row justify-content-between">
                    <h6>Paradise Biryani</h6>
                    <span>
                        <Badge>3.4 <Star size={12}/></Badge>
                    </span>
                </div>
                <p>
                    25 - 30min  
                </p>
                <span className="d-flex gap-1">
                    <h5>$250</h5><span>for one</span>
                </span>
                </Card.Body>
                <Card.Footer className="color-blue-100">50% off upto $100</Card.Footer>
            </Card>
        </>
    )
}

export default ItemCard