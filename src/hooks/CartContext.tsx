import { createContext, useState, ReactNode, useContext } from "react";
import { Cart } from "../shared/interfaces/cart.interface";
import { CartItem, Item } from "../shared/interfaces/item.interface";

interface CartContext {
    cart: Cart
    /**
     * Adds an item to the cart
     **/
    addItem: (item: CartItem) => void
    removeItem: (item: CartItem) => void
    increment: (item: CartItem) => void
    decrement: (item: CartItem) => void
    emptyCart: () => void
}
const CartContext = createContext<CartContext>({
    cart: {},
    addItem: () => { },
    removeItem: () => { },
    emptyCart: () => { },
    increment: () => { },
    decrement: () => { }
})

function CartStateProvider() {
    const [cart, setCart] = useState<Cart>({})

    const addItem = (newItem: CartItem) => {
        if (!(newItem.brand_id in cart)) {
            setCart((cart: Cart) => ({ ...cart, [newItem.brand_id]: [newItem] }))
            return
        }

        const indexOfItem = cart[newItem.brand_id].findIndex(item => newItem.id === item.id)

        if (indexOfItem != -1) {
            setCart((cart: Cart) => {
                cart[newItem.brand_id][indexOfItem].quantity += 1
                return cart
            })
        } else {
            setCart((cart: Cart) => ({ ...cart, [newItem.brand_id]: [...cart[newItem.brand_id], newItem] }))
        }
    }

    const increment = (item: CartItem) => {
        const indexOfItem = cart[item.brand_id].findIndex(i => item.id === i.id)
        if (indexOfItem != -1) {
            setCart((cart: Cart) => {
                const newCart = {...cart}
                newCart[item.brand_id][indexOfItem].quantity += 1
                return newCart
            })
        }
    }

    const decrement = (item: CartItem) => {
        if (item.quantity <= 1) {
            removeItem(item)
            return 
        }
        const indexOfItem = cart[item.brand_id].findIndex(i => item.id === i.id)
        if (indexOfItem != -1) {
            setCart((cart: Cart) => {
                const newCart = {...cart}
                newCart[item.brand_id][indexOfItem].quantity -= 1
                return newCart
            })
        }
    }

    const removeItem = (item: CartItem) => {
        setCart((cart: Cart) => ({
            ...cart,
            [item.brand_id]: [...cart[item.brand_id].filter(i => i.id !== item.id)]
        }))
    }

    const emptyCart = () => {
        setCart({})
    }

    return {
        cart,
        addItem,
        removeItem,
        emptyCart,
        increment,
        decrement
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const cartState = CartStateProvider()

    return (
        <CartContext.Provider value={{ ...cartState }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
