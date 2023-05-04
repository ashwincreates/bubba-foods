import React from "react";
import Modal from "../components/Dialog/Dialog";

function Popup() {
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
    }
  };

  return (
    <Modal title="Book Table">
      <div className="flex w-full justify-between">
        <h2 className="font-bold pb-4">Book a Table</h2>
        <Modal.Close />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="num-people">Number of People:</label>
        <select
            className="primary-input"
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
        <label htmlFor="time">Time:</label>
        <select
      className="primary-input"
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
        {error && <div className="error">{error}</div>}
        <button className="primary-button" onClick={handleBookNowClick}>
          Book
        </button>
      </div>
    </Modal>
  );
}

export default Popup;
