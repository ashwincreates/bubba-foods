import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "../context/FoodItemModalContext";
import "./CartPage.css";

export default function Cartpage() {

    const { cart, dispatch } = useContext(FoodItemContext)
    const [cost, setCost] = useState(0)

    useEffect(() => {
        // Calculate the cart's cost
        let cartCost = Object.keys(cart)
            .map((brand) => {
                return cart[brand]
                    .map((item) => item.Price__c)
                    .reduce((prev, curr) => prev + curr, 0)
            })
            .reduce((prev, curr) => prev + curr, 0)
        setCost(cartCost)
    }, [cart])

    return (
        <>
            <div className="max-h-[300px] min-h-[300px] overflow-y-auto my-3">
                {
                    Object.keys(cart).map(brand =>
                        cart[brand].map(item =>
                            <div className="border rounded p-3 mb-2 capitalize">
                                <div className="flex justify-between">
                                    <div className="col-8">
                                        <h5>{item.Name__c}</h5>
                                        <p className="text-xs text-gray-500">{item.Description__c}</p>
                                        <div className="font-bold">${item.Price__c}</div>
                                    </div>
                                    <div className="col-4 buttons">
                                        <button className="secondary-button" onClick={() => { dispatch({ type: 'removeItem', item: item }) }}>Remove</button> {/* remove button with orange color */}
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <p className="font-bold">Subtotal: ₹{cost}</p>
        </>
    )
};
