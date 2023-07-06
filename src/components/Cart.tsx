import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cartpage from "../pages/CartPage"
import Modal from "./Dialog/Dialog"
import { useCart } from "../hooks/CartContext"
import { ShoppingBag } from "react-feather"

function Cart() {
    const { cart } = useCart()
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (cart) {
            let countItems = Object.keys(cart)
                .map((brand) => cart[brand].length)
                .reduce((prev, curr) => prev + curr, 0)
            setCount(countItems)
        }

    }, [cart])

    return (
        <Modal action={
            <div className="relative hover:bg-gray-100 p-2 rounded-full cursor-pointer">
                {count > 0 ? <span className="bg-rose-400 text-xs rounded-full h-4 w-4 text-center text-white absolute top-[-9%] right-[-9%]">
                    {count}
                </span> : ''}
                <ShoppingBag size={18} />
            </div>
        }>
            <div className="flex w-full justify-between align-center">
                <h2>Your Cart</h2>
                <Modal.Close />
            </div>
            <div className="overflow-y-auto my-3">
                <Cartpage />
            </div>
        </Modal>
    )
}

export default Cart
