import React, { useState } from "react";
import "./Profile.css";

function Profile() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [contactNumber, setContactNumber] = useState("8982089345");
    const [password, setPassword] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("password");
    const [errors, setErrors] = useState({});

    const handleSave = () => {
        // Validation checks for first name
        if (!firstName.trim()) {
            setErrors({ ...errors, firstName: "First name is required" });
            return;
        }
        if (firstName.trim().length < 2) {
            setErrors({ ...errors, firstName: "First name should be at least 2 characters long" });
            return;
        } else {
            setErrors({ ...errors, firstName: null });
        }

        // Validation checks for last name
        if (!lastName.trim()) {
            setErrors({ ...errors, lastName: "Last name is required" });
            return;
        }
        if (lastName.trim().length < 2) {
            setErrors({ ...errors, lastName: "Last name should be at least 2 characters long" });
            return;
        } else {
            setErrors({ ...errors, lastName: null });
        }

        // Validation checks for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setErrors({ ...errors, email: "Invalid email address" });
            return;
        } else {
            setErrors({ ...errors, email: null });
        }

        // Validation checks for contact number
        const contactNumberRegex = /^\d{10}$/;
        if (!contactNumberRegex.test(contactNumber.trim())) {
            setErrors({ ...errors, contactNumber: "Invalid contact number" });
            return;
        } else {
            setErrors({ ...errors, contactNumber: null });
        }

        // Validation checks for password
        if (!password.trim()) {
            setErrors({ ...errors, password: "Password is required" });
            return;
        }
        if (password.trim().length < 8) {
            setErrors({ ...errors, password: "Password should be at least 8 characters long" });
            return;
        } else {
            setErrors({ ...errors, password: null });
        }

        // Validation checks for confirm password
        if (password.trim() !== confirmPassword.trim()) {
            setErrors({ ...errors, confirmPassword: "Passwords do not match" });
            return;
        } else {
            setErrors({ ...errors, confirmPassword: null });
        }

        // Save the updated profile information
        console.log("Profile updated!");
        const popup = document.createElement("div");
        popup.innerText = "Profile is updated!";
        popup.className = "popup";
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.remove();
        }, 2000);
    };

    return (
        <div className="profile-container">
            <div className="profile-fields-container">
                <div className="profile-details-field">
                    <div className="profile-details-field-label">First Name:</div>
                    <div className="profile-details-field-value">
                        <input type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                </div>
                <div className="profile-details-field">
                    <div className="profile-details-field-label">Last Name:</div>
                    <div className="profile-details-field-value">
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                </div>
                <div className="profile-details-field">
                    <div className="profile-details-field-label">Email Address:</div>
                    <div className="profile-details-field-value">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <div className="profile-details-field">
                    <div className="profile-details-field-label">Contact Number:</div>
                    <div className="profile-details-field-value">
                        <input
                            type="tel"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                        {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
                    </div>
                </div>
                <div className="profile-details-field">
                    <div className="profile-details-field-label">Password:</div>
                    <div className="profile-details-field-value">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                </div>
                <div className="profile-details-field">
                    <div className="profile-details-field-label">Confirm Password:</div>
                    <div className="profile-details-field-value">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                    </div>
                </div>
                <div className="profile-save-button-container">
                    <button className="profile-save-button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
