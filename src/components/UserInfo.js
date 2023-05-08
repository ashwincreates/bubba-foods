import { useContext } from "react"
import { User } from "react-feather"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

function UserInfo() {
    const {user} = useContext(UserContext)
    return (
        <>
            Welcome, {user ? user.name : "Guest"}
            {
                user ? <Link to='/profile/wadd/details'><User size={20} /></Link> : 
                <>
                    <Link to='/login' className="primary-button">Login</Link>
                    <Link to='/register' className="secondary-button">Register</Link>
                </>
            }
        </>
    )
}

export default UserInfo