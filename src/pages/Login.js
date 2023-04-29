import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const {dispatchUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatchUser({type: 'login'})
    navigate('/')
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    console.log("Create new account");
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password");
  };

  return (
    <>
      <Banner src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?size=626&ext=jpg&ga=GA1.1.1788765340.1681810500&semt=sph">
        <div className="absolute bottom-0 text-white h-full flex flex-col justify-center items-center w-full drop-shadow-lg">
          <img className="w-[200px]" alt="logo" src="images/Bubba Foods1.png"></img>
          <div className="mt-4 font-light">India's #1 Brand at your fingertips</div>
        </div>
      </Banner>
      <form className="mx-2 w-full md:max-w-[300px] md:mx-auto flex text-center flex-col gap-3 text-sm mt-4" onSubmit={handleLogin}>
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
        <button className="primary-button" type="submit">Login</button>
          <a className="text-orange-500 hover:underline" href="#" onClick={handleCreateAccount}>
            <span>Create new account</span>
          </a>
          <a className="text-gray-400 hover:underline" id="password" href="#" onClick={handleForgotPassword}>
            Forgot password?
          </a>
      </form>
      <Footer/>
    </>
  );
};

export default LoginForm;
