import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./OrderHistory.css";
import Reviewpopup from './Reviewpopup';

function OrderHistory() {
    const [showReviewpopup, setShowReviewpopup] = useState(false);
    const { user } = useContext(UserContext)
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/order/get/${user.Id}`)
            .then(response => response.json())
            .then(data => {
                setOrder(data)
            })
    }, [user.Id])

    const handleReviewClick = () => {
        setShowReviewpopup(true);
    };

    const handleClosePopup = () => {
        setShowReviewpopup(false);
    };

    return (
        <div className="order-history-container">
            {orders.map((order) => (
                <div className="order-history-item" key={order.order.Id}>

                    <div className="order-history-header">
                        <div className="order-history-date">{order.order.Date__c}</div>
                        <div className="order-history-total">Total Rs. {order.items.reduce((prev, curr) => prev + curr.Price__c, 0)}</div>
                    </div>
                    {showReviewpopup && (
                        <Reviewpopup onClose={handleClosePopup} />
                    )}
                    <div className="order-history-items">
                        {order.items.map((item) => (
                            <div className="order-history-item-details" key={item.Id}>
                                <img src={item.Image_Url__c} alt={item.Name__c} />
                                <div className="order-history-item-name">{item.Name__c}</div>
                                <div className="order-history-item-price">Rs. {item.Price__c}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full flex-row-reverse">
                        <button className='primary-button self-center' onClick={handleReviewClick}>Add Comment</button>
                    </div>
                    <hr className="mt-2"/>
                </div>
            ))}

        </div>
    );
}

export default OrderHistory;
