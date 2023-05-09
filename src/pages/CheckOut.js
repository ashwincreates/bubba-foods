import React, { useContext, useEffect, useState } from "react";
import Cartpage from "./CartPage";
import { Check } from "react-feather";
import { RadioGroup } from "@headlessui/react";
import { FoodItemContext } from "../context/FoodItemModalContext";
import { UserContext } from "../context/UserContext.js"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ORDERSTATE = {
    TYPE: 'type',
    LOCATION: 'location',
    PAYMENT: 'payment'
}

const DELIVERYTYPE = {
    DELIVERY: 'delivery',
    TAKEAWAY: 'takeaway'
}

const PAYMENT = {
    CASH: 'cash',
}

export default function CheckOut() {

    const { cart, dispatch } = useContext(FoodItemContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const [orderDetails, setOrderDetails] = useState({
        deliveryOption: DELIVERYTYPE.DELIVERY,
        address: null,
        payment: null
    })

    const [orderState, setOrderState] = useState(ORDERSTATE.TYPE)
    const [valid, setValid] = useState(false)

    useEffect(() => {
        if (orderDetails.deliveryOption && orderDetails.address && orderDetails.payment) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [orderDetails.deliveryOption, orderDetails.address, orderDetails.payment])

    const placeOrder = () => {
        console.log('Placing Order')

        const requestBody = {
            user_id: user.id,
            restaurant_id: 'a085i00000G7ExrAAF',
            address: orderDetails.address,
            type: orderDetails.deliveryOption,
            paymentOption: orderDetails.payment,
            paymentDetails: null,
            cart: cart,
        }

        console.log(requestBody)

        fetch(`${process.env.REACT_APP_API_URL}/order/neworder`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        }).then(response => {
            if (response.ok) {
                toast.success('Your order has been placed')
                dispatch({ type: 'emptyCart' })
                navigate('/')
            } else {
                toast.error('A error has been encountered, Please try again later')
            }
        })
    }

    return (
        <div className="max-w-4xl m-auto flex pt-4 gap-4">
            <form className="grow flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); placeOrder() }}>
                <div className="text-sm text-gray-500 rounded-lg shadow-md p-3 border">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-xs ${orderState === ORDERSTATE.TYPE ? 'text-gray-600' : 'text-gray-400'}`}>Order</h2>
                        <Check color="green" size={'18'} />
                    </div>
                    {
                        orderState === ORDERSTATE.TYPE ? <div className="mt-3">
                            <RadioGroup
                                aria-label="Order Type"
                                className="flex flex-col gap-3"
                                name='deliveryOption'
                                value={orderDetails.deliveryOption}
                                onChange={(e) => { setOrderDetails(prev => ({ ...prev, deliveryOption: e })) }}
                            >
                                <RadioGroup.Option value={DELIVERYTYPE.DELIVERY}>
                                    {
                                        ({ checked }) => <div className="flex gap-2 items-center">
                                            <input type='radio' checked={checked} />
                                            <span>Delivery</span>
                                        </div>
                                    }
                                </RadioGroup.Option>
                                <RadioGroup.Option value={DELIVERYTYPE.TAKEAWAY}>
                                    {
                                        ({ checked }) => <div className="flex gap-2 items-center">
                                            <input type='radio' checked={checked} />
                                            <span>Takeaway</span>
                                        </div>
                                    }
                                </RadioGroup.Option>
                            </RadioGroup>
                            <div className="flex flex-row-reverse gap-2">
                                <button className="primary-button" onClick={(e) => { e.preventDefault(); setOrderState(ORDERSTATE.LOCATION) }}>Next</button>
                            </div>
                        </div> : ''
                    }
                </div>

                <div className="text-sm text-gray-500 rounded-lg shadow-md p-3 border">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-xs ${orderState === ORDERSTATE.LOCATION ? 'text-gray-600' : 'text-gray-400'}`}>Address</h2>
                        <Check color="green" size={'18'} />
                    </div>
                    {
                        orderState === ORDERSTATE.LOCATION ? <div className="mt-3">
                            <RadioGroup
                                aria-label="Delivery Addresses"
                                className="flex flex-col gap-3"
                                value={orderDetails.address}
                                onChange={(e) => { setOrderDetails(prev => ({ ...prev, address: e })) }}
                            >
                                <RadioGroup.Option value="Address1">
                                    {
                                        ({ checked }) => <div className="flex gap-2 items-center">
                                            <input type='radio' checked={checked} />
                                            <span>Address1</span>
                                        </div>
                                    }
                                </RadioGroup.Option>
                                <RadioGroup.Option value="Address2">
                                    {
                                        ({ checked }) => <div className="flex gap-2 items-center">
                                            <input type='radio' checked={checked} />
                                            <span>Address2</span>
                                        </div>
                                    }
                                </RadioGroup.Option>
                            </RadioGroup>
                            <div className="flex flex-row-reverse gap-2">
                                <button className="primary-button" onClick={(e) => { e.preventDefault(); setOrderState(ORDERSTATE.PAYMENT) }}>Next</button>
                                <button className="primary-button" onClick={(e) => { e.preventDefault(); setOrderState(ORDERSTATE.TYPE) }}>Back</button>
                            </div>
                        </div> : ''
                    }
                </div>

                <div className="text-sm text-gray-500 rounded-lg shadow-md p-3 border">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-xs ${orderState === ORDERSTATE.PAYMENT ? 'text-gray-600' : 'text-gray-400'}`}>Payment</h2>
                        <Check color="green" size={'18'} />
                    </div>
                    {
                        orderState === ORDERSTATE.PAYMENT ? <div className='mt-3'>
                            <RadioGroup
                                aria-label="Payment Options"
                                className="flex flex-col gap-3"
                                name="payment-option"
                                value={orderDetails.payment}
                                onChange={(e) => { setOrderDetails(prev => ({ ...prev, payment: e })) }}
                            >
                                <RadioGroup.Option value={PAYMENT.CASH}>
                                    {
                                        ({ checked }) => <div className="flex gap-2 items-center">
                                            <input type='radio' checked={checked} />
                                            <span>Cash on {orderDetails.deliveryOption}</span>
                                        </div>
                                    }
                                </RadioGroup.Option>
                            </RadioGroup>
                            <div className="flex flex-row-reverse gap-2">
                                <button className="primary-button" onClick={(e) => { e.preventDefault(); setOrderState(ORDERSTATE.LOCATION) }}>Back</button>
                            </div>
                        </div> : ''
                    }
                </div>
                <button disabled={!valid} type="submit" className="primary-button self-start">Place Order</button>
            </form>
            <div className="float-right w-[400px]">
                <h2>Your Cart</h2>
                <Cartpage />
            </div>
        </div>
    )
}
