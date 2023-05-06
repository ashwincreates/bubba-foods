import React, { useState } from "react";
import "./CartPage.css";
import CheckOut from "./CheckOut";

export default function Cartpage() {
    const [displayItem, setDisplayItem] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(999);
    const [quantity1, setQuantity1] = useState(1); // initialize quantity of item 1 to 1
    const [price1, setPrice1] = useState(999); // initialize price of item 1 to 999
    const [quantity2, setQuantity2] = useState(1);
    const [displayItem2, setDisplayItem2] = useState(true);
    const [price2, setPrice2] = useState(1199);
    const [displayItem1, setDisplayItem1] = useState(true); // initialize display of item 1 to true
    const [showContent, setShowContent] = useState(false); // initialize showContent to false
    const [displayItem4, setDisplayItem4] = useState(true);

    const [totalItems, setTotalItems] = useState(0); // initialize total items to 0

    // function to handle quantity increment for item 1
    const handleRemove = () => {
        setDisplayItem(false);
    };
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setPrice(prevPrice => prevPrice - 999);
        }
    };
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        setPrice(prevPrice => prevPrice + 999);
    };

    const handleIncrement1 = () => {
        setQuantity1(prevQuantity => prevQuantity + 1);
        setPrice1(prevPrice => prevPrice + 999); // increase price by 999 for each increment
        setTotalItems(prevTotal => prevTotal + 1); // increase total items by 1
    };

    // function to handle quantity decrement for item 1
    const handleDecrement1 = () => {
        if (quantity1 > 1) { // make sure quantity does not go below 1
            setQuantity1(prevQuantity => prevQuantity - 1);
            setPrice1(prevPrice => prevPrice - 999); // decrease price by 999 for each decrement
            setTotalItems(prevTotal => prevTotal - 1); // decrease total items by 1
        }
    };

    // function to handle item removal for item 1
    const handleRemove1 = () => {
        setDisplayItem1(false); // set displayItem to false to hide the item
        // setTotalItems(prevTotal => prevTotal - quantity1); decrease total items by the quantity of item 1
    };
    // Define state variables for the second food item // Set the price for the second food item to $11.99

    // Define functions for the second food item
    const handleRemove2 = () => {
        setDisplayItem2(false);
    };
    const handleRemove4 = () => {
        setDisplayItem4(false);
    };
    const handleDecrement2 = () => {
        if (quantity2 > 1) {
            setQuantity2(prevQuantity => prevQuantity - 1);
            setPrice2(prevPrice => prevPrice - 1199); // Adjust the price based on the quantity
        }
    };

    const handleIncrement2 = () => {
        setQuantity2(prevQuantity => prevQuantity + 1);
        setPrice2(prevPrice => prevPrice + 1199); // Adjust the price based on the quantity
    };


    const handleCheckout = () => {
        setShowContent(true); // set showContent to true to display the content in col-7
    };

    return (
        <div className="main-container">
            <div className="row checkout">
                {displayItem4 ? (
                    <>
                        <div className="col-5 cart" >
                            <button className="primary-button" OnClick={handleRemove4}>EmptyCart</button> {/* remove button with orange color */}
                            {displayItem ? (
                                <>

                                    <div className="item-box">
                                        <div className="row summary">
                                            <div className="col-8">
                                                <h5>Gongura Chicken</h5>
                                                <p>Raita and curd will be served</p>
                                            </div>
                                            <div className="col-4 buttons">
                                                <button className="primary-button"  onClick={handleRemove}>Remove</button> {/* remove button with orange color */}
                                                <div className="quantity">
                                                    <button onClick={handleDecrement}>-</button> {/* decrement button */}
                                                    <span>{quantity}</span> {/* display quantity */}

                                                    <button onClick={handleIncrement} sx={{ bgcolor: 'orange', color: 'white', margintop: '10px' }}>+</button> {/* increment button with orange color */}
                                                </div>
                                                <div className="item-price">${price}</div> {/* display price for this item */}
                                            </div>
                                        </div>
                                        <p className="cartp">{quantity} Item{quantity !== 1 && "s"}</p> {/* display number of items in cart */}
                                        <p className="cartpr">${price}</p> {/* display total price */}
                                    </div>

                                </>
                            ) : (
                                <p></p> // display this message if there are no items in cart
                            )}
                            {displayItem1 ? (
                                <>

                                    <div className="item-box">
                                        <div className="row summary">
                                            <div className="col-8">
                                                <h5>Paneer Tikka</h5>
                                                <p>Raita and curd will be served</p>
                                            </div>
                                            <div className="col-4 buttons">
                                                <button className="primary-button" onClick={handleRemove1}>Remove</button> {/* remove button with orange color */}
                                                <div className="quantity">
                                                    <button onClick={handleDecrement1}>-</button> {/* decrement button */}
                                                    <span>{quantity1}</span> {/* display quantity */}

                                                    <button onClick={handleIncrement1} sx={{ bgcolor: 'orange', color: 'white', margintop: '10px' }}>+</button> {/* increment button with orange color */}
                                                </div>
                                                <div className="item-price">${price1}</div> {/* display price for this item */}
                                            </div>
                                        </div>
                                        <p className="cartp">{quantity1} Item{quantity1 !== 1 && "s"}</p> {/* display number of items in cart */}
                                        <p className="cartpr">${price1}</p> {/* display total price */}
                                    </div>

                                </>
                            ) : (
                                <p></p> // display this message if there are no items in cart
                            )}
                            {displayItem2 ? (
                                <>

                                    <div className="item-box">
                                        <div className="row summary">
                                            <div className="col-8">
                                                <h5>Veg Biriyani</h5>
                                                <p>Raita and curd will be served</p>
                                            </div>
                                            <div className="col-4 buttons">
                                                <button className="primary-button" OnClick={handleRemove2}>Remove</button> {/* remove button with orange color */}
                                                <div className="quantity">
                                                    <button onClick={handleDecrement2}>-</button> {/* decrement button */}
                                                    <span>{quantity2}</span> {/* display quantity */}

                                                    <button onClick={handleIncrement2} sx={{ bgcolor: 'orange', color: 'white', margintop: '10px' }}>+</button> {/* increment button with orange color */}
                                                </div>
                                                <div className="item-price">${price1}</div> {/* display price for this item */}
                                            </div>
                                        </div>
                                        <p className="cartp">{quantity2} Item{quantity2 !== 1 && "s"}</p> {/* display number of items in cart */}
                                        <p className="cartpr">${price2}</p> {/* display total price */}
                                    </div>

                                </>
                            ) : (
                                <p></p> // display this message if there are no items in cart
                            )}
                        </div>
                    </>
                ) : (
                    <h4>Your cart is empty</h4>
                )}
                < div className="col-7" style={{ display: showContent ? 'block' : 'none' }}>

                {/* content to be displayed when showContent is true */}
                <CheckOut />
                <button className="primary-button" onClick={() => setShowContent(false)}>Back to Cart</button>
            </div>
        </div>
        </div >
    )
};
