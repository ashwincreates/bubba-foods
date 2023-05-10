import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer";
import RegisterImage from "./RegisterImage";

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
    console.log(
      `FirstName: ${Firstname}, LastName: ${Lastname}, MobileNumber: ${Mobilenumber}, Email: ${email}, Password: ${password} CPassword: ${cpassword}`
    );
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
          placeholder="First Name"
          value={Firstname}
          onChange={handleFirstName}
          required
        />
        <input
          className="primary-input"
          type="text"
          id="LName"
          placeholder="Last Name"
          value={Lastname}
          onChange={handleLastName}
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
        <button className="primary-button" type="submit">
          Sign Up
        </button>
        <a className="text-gray-400 hover:underline" href="">
          <span>By Creating an account, you accept our Terms & Conditions</span>
        </a>
      </form>
      <Footer />
    </>
  );
};
export default Register;
