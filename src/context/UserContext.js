import { createContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-hot-toast";

export const UserContext = createContext(null)

function UserReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return action.payload
        }
        case 'logout': {
            localStorage.removeItem('token')
            return null
        }
        case 'register': return action.payload
        case 'rewards': return {...state, Rewards__c: action.payload.rewards}
        case 'update': {
            fetch(`${process.env.REACT_APP_API_URL}/user/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...state, [action.address]: action.value })
            })
                .then(response => {
                    if (!response.ok) {
                        toast.error("Unknown error occurred")
                    }
                })
            return { ...state, [action.address]: action.value }
        }
        default: return null
    }
}

function UserProvider({ children }) {
    const [user, dispatchUser] = useReducer(UserReducer)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoading(true)
            console.log(token)
            fetch(`${process.env.REACT_APP_API_URL}/user/${token}`)
                .then(response => response.json())
                .then(data => {
                    return data.id
                }).then(id => {
                    fetch(`${process.env.REACT_APP_API_URL}/user/get/${id}`)
                        .then(response => response.json())
                        .then(data => dispatchUser({ type: 'login', payload: data }))
                        .then(_ => setLoading(false))
                })
        }
    }, [])

    return (
        <>
            {loading ?
                <div className="flex justify-center items-center h-full w-full">
                    <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div> :
                <UserContext.Provider value={{ user, dispatchUser }}>
                    {children}
                </UserContext.Provider>
            }
        </>
    )
}

export default UserProvider
