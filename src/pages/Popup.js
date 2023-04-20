import React from "react";
import "./Popup.css";

function Popup({ onClose }) {
  const [numPeople, setNumPeople] = React.useState("");
  const [time, setTime] = React.useState("");
  const [availSlots, setAvailSlots] = React.useState([
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ]);
  const [error, setError] = React.useState("");
  const [isBooked, setIsBooked] = React.useState(false);

  const handleBookNowClick = () => {
    if (!numPeople || !time) {
      setError("Please select number of people and time");
    } else {
      // perform submit actions
      // ...
      setIsBooked(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>Book a Table</h2>
          <button className="close-button" onClick={handleCloseClick}>
            &times;
          </button>
        </div>
        <div className="popup-content">
          <div className="form-group">
            <label htmlFor="num-people">Number of People:</label>
            <select
              id="num-people"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              required
            >
              <option value="">Select Number of People</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {availSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          {error && <div className="error">{error}</div>}
          <button className="book-button" onClick={handleBookNowClick}>
            Book
          </button>
          {isBooked && (
            <div className="confirmation-popup">
              <div className="confirmation-popup-inner">
                <div className="icon-container">
                  <i className="fa fa-check-circle" />
                </div>
                <div className="message-container">
                  <p>Table booked successfully!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
