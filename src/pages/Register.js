import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [Firstname, setFirstName] = useState("");
    const [Lastname, setLastName] = useState("");
    const [Mobilenumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const handleFirstName = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
    };

    const handleMobileNumber = (event) => {
        event.preventDefault();
        setMobileNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    const handleCPassword = (event) => {
        event.preventDefault();
        setCPassword(event.target.value);
    };

    const handlesignup = (event) => {
        event.preventDefault();
        console.log(`FirstName: ${Firstname}, LastName: ${Lastname}, MobileNumber: ${Mobilenumber}, Email: ${email}, Password: ${password} CPassword: ${cpassword}`);
    };

    return (

        <form className="signup-form" onSubmit={handlesignup}>
            <div className="form-group">
                <input
                    type="text"
                    id="FName"
                    placeholder="First Name"
                    value={Firstname}
                    onChange={handleFirstName}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    id="LName"
                    placeholder="Last Name"
                    value={Lastname}
                    onChange={handleLastName}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    id="Mobile"
                    placeholder="Mobile Number"
                    value={Mobilenumber}
                    onChange={handleMobileNumber}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    id="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    id="CPassword"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={handleCPassword}
                    required
                />
            </div>

                <span>By Creating an account, you accept our Terms & Conditions</span>

            <button type="submit">Create an account</button>
            <div className="login-links">
            </div>
        </form>

    
    );

};
export default Register