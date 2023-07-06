import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer";
import { UserContext, useAuth } from "../context/UserContext";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
    };


    return (
        <>
            <Banner src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?size=626&ext=jpg&ga=GA1.1.1788765340.1681810500&semt=sph">
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
                onSubmit={handleLogin}
            >
                <h2 className="p-2 text-xl font-semi">Login</h2>
                <input
                    className="primary-input"
                    type="email"
                    id="email"
                    placeholder="mobile number or email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    className="primary-input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button className="primary-button" type="submit">
                    Login
                </button>

                <span>
                    <Link to="/register">Create new account</Link>
                </span>

                <Link to="/forgot">Forgot password?</Link>
            </form>
            <Footer />
        </>
    );
};

export default LoginForm;
