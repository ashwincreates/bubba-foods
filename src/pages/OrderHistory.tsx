import { useEffect, useState } from "react";
import { useAuth } from "../hooks/UserContext";
import { Order } from "../shared/interfaces/order.interface";

function OrderHistory() {
    const [showReviewpopup, setShowReviewpopup] = useState(false);
    const { user } = useAuth()
    const [orders, setOrder] = useState<Order[]>([])

    // useEffect(() => {
    //     if (user) {
    //         fetch(`${process.env.REACT_APP_API_URL}/order/get/${user.id}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 setOrder(data)
    //             })
    //     }
    // }, [])

    return (
        <div className="order-history-container">
            {orders.map((order: Order) => (
                <div className="order-history-item" key={order.id}>

                    <div className="order-history-header">
                        <div className="order-history-date">{order.date.getDate()}</div>
                        <div className="order-history-total">Total Rs. {order.items.reduce((prev, curr) => prev + curr.price, 0)}</div>
                    </div>
                    <div className="order-history-items">
                        {order.items.map((item) => (
                            <div className="order-history-item-details" key={item.id}>
                                <img src={item.img_url} alt={item.name} />
                                <div className="order-history-item-name">{item.name}</div>
                                <div className="order-history-item-price">Rs. {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
}

export default OrderHistory;
