import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/UserContext";

const Register = () => {
    const [Name, setName] = useState("");
    const [Mobilenumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [valid, setValid] = useState(false)

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleFirstName = (event: any) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleMobileNumber = (event: any) => {
        event.preventDefault();
        setMobileNumber(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        event.preventDefault();
        if (event.target.value === cpassword) {
            setValid(true)
        } else {
            setValid(false)
        }
        setPassword(event.target.value);
    };

    const handleCPassword = (event: any) => {
        event.preventDefault();
        if (event.target.value === password) {
            setValid(true)
        } else {
            setValid(false)
        }
        setCPassword(event.target.value);
    };

    const handlesignup = async (event: any) => {
        event.preventDefault();
        const userId = await fetch(`${process.env.REACT_APP_API_URL}/user/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: Name,
                phone: Mobilenumber
            })
        })
            .then(response => {
                switch (response.status) {
                    case 201: {
                        return response.json()
                    }
                    case 409: {
                        return toast.error("Please give email and password")
                    }
                    default: {
                        return toast.error("An Unknown error occurred")
                    }
                }
            })
            .then(data => data)
        if (userId.id) {
            localStorage.setItem('token', userId.token)
            await fetch(`${process.env.REACT_APP_API_URL}/user/get/${userId.id}`)
                .then(response => response.json())
                // .then(data => dispatchUser({ type: 'login', payload: data }))
            navigate("/");
            toast.success("Registration Successful")
        }
    };

    return (
        <>
            <Banner src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600">
                <div className="absolute bottom-0 text-white h-full flex flex-col justify-center items-center w-full drop-shadow-lg">
                    <img
                        className="w-[200px]"
                        alt="logo"
                        src="images/Bubba Foods1.png"
                    ></img>
                    <div className="mt-4 font-light">
                        India's #1 Brand at your fingertips
                    </div>
                </div>
            </Banner>
            <form
                className="mx-2 w-full md:max-w-[300px] md:mx-auto flex text-center flex-col gap-3 text-sm mt-4"
                onSubmit={handlesignup}
            >
                <h2 className="p-2 text-xl font-semi">Sign Up</h2>
                <input
                    className="primary-input"
                    type="text"
                    id="FName"
                    placeholder="Name"
                    value={Name}
                    onChange={handleFirstName}
                    required
                />
                <input
                    className="primary-input"
                    type="text"
                    id="Mobile"
                    placeholder="Mobile Number"
                    value={Mobilenumber}
                    onChange={handleMobileNumber}
                    required
                />
                <input
                    className="primary-input"
                    type="email"
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    className="primary-input"
                    type="password"
                    id="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <input
                    className="primary-input"
                    type="password"
                    id="CPassword"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={handleCPassword}
                    required
                />
                {password !== cpassword ? 'Passwords do not match' : ''}
                <button className="primary-button" type="submit" disabled={!valid}>
                    Sign Up
                </button>
                <span className="text-gray-400 hover:underline">By Creating an account, you accept our Terms & Conditions</span>
            </form>
            <Footer />
        </>
    );
};
export default Register;
