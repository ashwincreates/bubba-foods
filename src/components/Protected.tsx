import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Protected({children}) {
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (user == null) toast.error("Please login")
    }, [user])

    if (user == null) {
        return <Navigate to="/"/>
    }

    return children
}
