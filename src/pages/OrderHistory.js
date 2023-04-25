import React from "react";
import "./OrderHistory.css";

function OrderHistory() {
  const orders = [
    {
      id: 1,
      date: "April 1, 2023",
      total: "$50.00",
      items: [
        {
          id: 1,
          name: "Pizza",
          price: "$10.00",
          quantity: 2,
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
        },
        {
          id: 2,
          name: "Burger",
          price: "$15.00",
          quantity: 1,
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        },
        {
          id: 3,
          name: "Fries",
          price: "$5.00",
          quantity: 1,
          image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ],
    },
    {
      id: 2,
      date: "March 28, 2023",
      total: "$20.00",
      items: [
        {
          id: 1,
          name: "Salad",
          price: "$10.00",
          quantity: 1,
          image: "https://media.istockphoto.com/id/1343569460/photo/a-white-bowl-of-salad-caesar-photography.jpg?b=1&s=170667a&w=0&k=20&c=ChUBzNOkg5UTv8jqArSE1MbcbHosw-hajIwRbi9B_dU=",
        },
        {
          id: 2,
          name: "Soda",
          price: "$5.00",
          quantity: 2,
          image: "https://media.istockphoto.com/id/681018122/photo/cola-with-crushed-ice-and-straw-in-tall-glass.jpg?b=1&s=170667a&w=0&k=20&c=d9Rc5qY4_liryDkqXQwKIvNS8C5CGfCBy8c0qPiHgXE=",
        },
      ],
    },
  ];

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.map((order) => (
        <div className="order-history-item" key={order.id}>
          <div className="order-history-header">
            <div className="order-history-date">{order.date}</div>
            <div className="order-history-total">{order.total}</div>
          </div>
          <div className="order-history-items">
            {order.items.map((item) => (
              <div className="order-history-item-details" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="order-history-item-name">{item.name}</div>
                <div className="order-history-item-price">{item.price}</div>
                <div className="order-history-item-quantity">
                  Quantity: {item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
