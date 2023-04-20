import React, { useState } from 'react';
import Reviews from './Reviews';
import Photos from './Photos';
import Menu from './Menu';
import Popup from './Popup';
import "./ReviewPhotoMenu.css";

function ReviewPhotoMenu() {
  const [activeButton, setActiveButton] = useState("reviews");
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleBookTableClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "reviews":
        return <Reviews />;
      case "photos":
        return <Photos />;
      case "menu":
        return <Menu />;
      default:
        return null;
    }
  };

  return (
    <div className="review-photo-menu">
      <div className="button-container">
        <button className="new-button" onClick={handleBookTableClick}>Book Table</button>
      </div>
      {showPopup && (
        <Popup onClose={handleClosePopup} />
      )}
      <div className="separator"></div> 
      <nav className="buttons-container">
        <button
          className={`button ${activeButton === "reviews" && "active"}`}
          onClick={() => handleButtonClick("reviews")}
        >
          Reviews
        </button>
        <button
          className={`button ${activeButton === "photos" && "active"}`}
          onClick={() => handleButtonClick("photos")}
        >
          Photos
        </button>
        <button
          className={`button ${activeButton === "menu" && "active"}`}
          onClick={() => handleButtonClick("menu")}
        >
          Menu
        </button>
      </nav>
      <div className="content-container">{renderContent()}</div>
    </div>
  );
}

export default ReviewPhotoMenu;
