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
                    .map((item) => item.Price__c + item.addons.reduce((prev, curr) => prev + curr.Price__c, 0))
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
                        cart[brand].map((item) =>
                            <div className="border rounded p-3 mb-2 capitalize">
                                <div className="flex justify-between">
                                    <div>
                                        <h5>{item.Name__c}</h5>
                                        <p className="text-xs text-gray-500">{item.Description__c}</p>
                                        {
                                            item.addons.map(addon =>
                                                <span className="text-xs">+Rs {addon.Price__c} {addon.Name__c}</span>
                                            )
                                        }
                                        <div className="font-bold">Rs. {item.Price__c + item.addons.reduce((prev, curr) => prev + curr.Price__c, 0)}</div>
                                    </div>
                                    <div className="">
                                        <button className="secondary-button" onClick={() => { dispatch({ type: 'removeItem', item: item }) }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <p className="font-bold">Subtotal: Rs. {cost}</p>
        </>
    )
};
