import React, { useState } from "react";
import "./ProfileDetails.css";
import Profile from "./Profile";
import AddressBook from "./AddressBook"
import OrderHistory from "./OrderHistory";
import BookingHistory from "./BookingHistory";
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
    <div className="profile-details-container">
      <div className="profile-details-left-container">
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
          </button> */}
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
          )} */}
        </div>
      </div>
      <div className="profile-details-right-container">
        <div className="profile-details-user-profile">
          <div className="user-profile-image"></div>
          <div className="user-profile-name">Jhon Doe</div>
          <div className="update-profile">
            <button className="update-profile-button">Update Profile</button>
          </div>
        </div>
        <div className="connected-by">
          <div className="connect-symbol"></div>
          <div className="connected-by-name">Connected by Jhon Doe</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
