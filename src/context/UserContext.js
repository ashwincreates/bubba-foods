import { createContext, useReducer } from "react";

export const UserContext = createContext(null)

function UserReducer(state, action) {
    switch (action.type) {
        case 'login': return { name: 'John', id: 'a025i00000KtXchAAF' }
        case 'logout': return null
        case 'register': return { name: 'John', id: 'a025i00000KtXchAAF' }
        default: return null
    }
}

function UserProvider({ children }) {
    const [user, dispatchUser] = useReducer(UserReducer)
    return (
        <UserContext.Provider value={{ user, dispatchUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
