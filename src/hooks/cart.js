import { useReducer } from "react";

function cartReducer(cart, action) {
    switch (action.type) {
        case 'addItem': {
            let newCart = structuredClone(cart)
            if (action.item.Brand__c in newCart) {
                newCart[action.item.Brand__c].push({...action.item, addons: action.addons})
            } else {
                newCart[action.item.Brand__c] = [{...action.item, addons: action.addons}]
            }
            return newCart
        }
        case 'removeItem': {
            let newCart = structuredClone(cart)
            newCart[action.item.Brand__c] = newCart[action.item.Brand__c].filter(item => item.Id !== action.item.Id)
            return newCart
        }
        case 'emptyCart': {
            return {}
        }
        default: return cart
    }
}

export default function useCart() {
    return useReducer(cartReducer, {})
}
