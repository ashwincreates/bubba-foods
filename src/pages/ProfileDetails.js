import React, { useState } from "react";
import "./ProfileDetails.css";
import Profile from "./Profile";
import AddressBook from "./AddressBook"
import OrderHistory from "./OrderHistory";
import BookingHistory from "./BookingHistory";
import Banner from "../components/Banner/Banner";
import { NavLink, Outlet } from "react-router-dom";
// import Favorites from "./Favorites";

function ProfileDetails() {
    const [activeButton, setActiveButton] = useState("profile");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const isButtonActive = (buttonName) => {
        return activeButton === buttonName ? "active" : "";
    };

    return (
        <>
            <Banner width="200px" src={"https://images.unsplash.com/photo-1589301773220-9e7950ae31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"}>
                <div className="absolute bottom-0 text-white h-full w-full drop-shadow-lg">
                    <div className="max-w-4xl h-full w-full m-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="user-profile-image"></div>
                            <div className="user-profile-name">Jhon Doe</div>
                        </div>
                        <button className="primary-button">Update Details</button>
                    </div>
                </div>
            </Banner>
            <nav className="flex max-w-4xl m-auto w-full gap-4 bg-white border-b border-gray-200 pt-3 max-md:pt-3 overflow-auto">
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`details`}>
                    Profile
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`addressbook`}>
                    Address Book
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`orders`}>
                    Orders
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`bookings`}>
                    Bookings
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`rewards`}>
                    Rewards
                </NavLink>
                <NavLink
                    className={({ isActive }) => `px-8 pb-3 ${isActive ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
                    to={`support`}>
                    Support 
                </NavLink>
            </nav>
            <div className="max-w-4xl w-full m-auto">
                {/* <div className="profile-details-left-container">
          <div className="profile-details-buttons-container">
            <button
              className={`profile-details-button ${isButtonActive("profile")}`}
              onClick={() => handleButtonClick("profile")}
            >
              Profile
            </button>
            <button
              className={`profile-details-button ${isButtonActive("addressbook")}`}
              onClick={() => handleButtonClick("addressbook")}
            >
              Address Book
            </button>
            <button
              className={`profile-details-button ${isButtonActive("orderhistory")}`}
              onClick={() => handleButtonClick("orderhistory")}
            >
              Order History
            </button>
            <button
              className={`profile-details-button ${isButtonActive("bookinghistory")}`}
              onClick={() => handleButtonClick("bookinghistory")}
            >
              Booking History
            </button>
            {/* <button
            className={`profile-details-button ${isButtonActive("favorites")}`}
            onClick={() => handleButtonClick("favorites")}
          >
            Favorites
          </button>
            <div className={`line ${isButtonActive(activeButton)}`} />
          </div>
          <div className="profile-details-content-wrapper">
            {activeButton === "profile" && (
              <div className="profile-content">
                <Profile />
              </div>
            )}
            {activeButton === "addressbook" && (
              <div className="address-book-content">
                <AddressBook />
              </div>
            )}
            {activeButton === "orderhistory" && (
              <div className="order-history-content">
                <OrderHistory />
              </div>
            )}
            {activeButton === "bookinghistory" && (
              <div className="booking-history-content">
                <BookingHistory />
              </div>
            )}
            {/* {activeButton === "favorites" && (
            <div className="favorites-content">
              <Favorites />
            </div>
          )}
          </div>
        </div> */}
                <Outlet />
            </div>
        </>
    );
}

export default ProfileDetails;
