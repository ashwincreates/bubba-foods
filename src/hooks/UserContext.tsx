import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { User } from "../shared/interfaces/user.interface";
import { useNavigate } from "react-router-dom";

interface UserContext { user: User | null, login: Function, logout: Function, register: Function, update: Function }
export const UserContext = createContext<UserContext>({user: null, login: () => { }, logout: () => { }, register: () => { }, update: () => { } })

function UserAuthProvider() {
    const [user, setUser] = useState<User | null>({
        id: 'awdadwdadawdawd',
        img_url: '',
        phone_no: '987654321',
        name: 'Tarun Sahu',
        email: 'tarun@gmail.com'
    })

    const login = async (email: string, password: string) => {
        const userId = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => {
                switch (response.status) {
                    case 200: {
                        return response.json()
                    }
                    case 400: {
                        return toast.error("Please give email and password")
                    }
                    case 404: {
                        return toast.error("Account not found, please register")
                    }
                    case 401: {
                        return toast.error("Password is incorrect, please enter the correct password")
                    }
                    default: return toast.error("An unknown error occurred")
                }
            })
            .then(data => data)

        if (userId.id) {
            localStorage.setItem('token', userId.token)
            await fetch(`${process.env.REACT_APP_API_URL}/user/get/${userId.id}`)
                .then(response => response.json())
                .then(data => setUser(data))
            toast.success("Login Successful")
        }
    }

    const loginByToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            fetch(`${process.env.REACT_APP_API_URL}/user/${token}`)
                .then(response => response.json())
                .then(data => {
                    return data.id
                }).then(id => {
                    fetch(`${process.env.REACT_APP_API_URL}/user/get/${id}`)
                        .then(response => response.json())
                        .then(data => setUser(data))
                })
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    const register = (name: string, email: string, password: string) => {
    }
    const update = (user: User) => {
        fetch(`${process.env.REACT_APP_API_URL}/user/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (!response.ok) {
                    toast.error("Unknown error occurred")
                }
            })
        setUser(user)
    }

    return {
        user,
        login,
        loginByToken,
        logout,
        register,
        update
    }
}

function UserProvider({ children }: { children: JSX.Element }) {
    const userAuth = UserAuthProvider()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        userAuth.loginByToken()
            .then(() => setLoading(false))
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center h-full w-full">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div> :
                    <UserContext.Provider value={{ ...userAuth }}>
                        {children}
                    </UserContext.Provider>
            }
        </>
    )
}

export function useAuth() {
    return useContext(UserContext)
}

export default UserProvider
