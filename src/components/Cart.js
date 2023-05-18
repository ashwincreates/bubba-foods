import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FoodItemContext } from "../context/FoodItemModalContext"
import Cartpage from "../pages/CartPage"
import Modal from "./Dialog/Dialog"

function Cart() {
    const { cart } = useContext(FoodItemContext)
    const [count, setCount] = useState(0)

    useEffect(() => {
        let countItems = Object.keys(cart)
            .map((brand) => cart[brand].length)
            .reduce((prev, curr) => prev + curr, 0)
        setCount(countItems)

    }, [cart])
    return (
        <div className="fixed bottom-0 w-full h-[64px] px-4 bg-white flex justify-between border-t">
            <Modal title={`Your Cart (${count})`}>
                <div className="flex w-full justify-between align-center">
                    <h2>Your Cart</h2>
                    <Modal.Close />
                </div>
                <div className="overflow-y-auto my-3">
                    <Cartpage />
                </div>
            </Modal>
            <Link to={'checkout'} className="primary-button self-center">Checkout</Link>
        </div>
    )
}

export default Cart
