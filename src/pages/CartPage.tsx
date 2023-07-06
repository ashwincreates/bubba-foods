import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartContext";
import { CartItem } from "../shared/interfaces/item.interface";
import { Minus, Plus } from "react-feather";

export default function Cartpage() {

    const { cart, removeItem, increment, decrement } = useCart()
    const [cost, setCost] = useState(0)

    useEffect(() => {
        let cartCost = Object.keys(cart)
            .map((brand) => {
                return cart[brand]
                    .map((item: CartItem) => item.price * item.quantity + item.addons.reduce((prev, curr) => prev + curr.price, 0))
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
                                        <h5>{item.name}</h5>
                                        <p className="text-xs text-gray-500">{item.description}</p>
                                        {
                                            item.addons.map(addon =>
                                                <span className="text-xs">+Rs {addon.price} {addon.name}</span>
                                            )
                                        }
                                        <div className="font-bold">Rs. {item.price + item.addons.reduce((prev, curr) => prev + curr.price, 0)}</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className="secondary-button" onClick={() => { removeItem(item) }}>Remove</button>
                                        <div className="flex justify-between items-center border rounded-sm">
                                            <button className="p-2" onClick={() => {decrement(item)}}><Minus size={14}/></button>
                                            <span className="">{item.quantity}</span>
                                            <button className="p-2" onClick={() => {increment(item)}}><Plus size={14}/></button>
                                        </div>
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
