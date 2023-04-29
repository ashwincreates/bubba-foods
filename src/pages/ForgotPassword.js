import React from "react";
import "../pages/ForgotPassword.css";

function UserProfileForm() {
  return (
    <div className="form-container-form">
      <div className="background-image-form"></div>
      <div className="image-container-form">
        <img
          src="https://img.freepik.com/premium-vector/man-icon-vector-paper-cut_471402-122.jpg?w=740"
          alt="User Profile"
        />
      </div>
      <h2>Forgot Password</h2>
      <span>
        Enter your email and we'll send you a link to reset your password.
      </span>
      <form>
        <label htmlFor="enter your email and we will send you the OTP"></label>
        <input
          type="email"
          className="email"
          name="email"
          placeholder="bubbafoods@gmail.com"
        />

        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
}

export default UserProfileForm;
