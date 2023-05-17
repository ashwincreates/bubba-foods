import { createContext, useEffect, useReducer } from "react";
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

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const userId = fetch(`${process.env.REACT_APP_API_URL}/user/token`)
                .then(response => response.json())
                .then(data => {
                    return data.id
                })
            fetch(`${process.env.REACT_APP_API_URL}/user/get/${userId}`)
                .then(response => response.json())
                .then(data => dispatchUser({ type: 'login', payload: data }))
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, dispatchUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
