import React, { useEffect, useState } from "react";
import Modal from "../components/Dialog/Dialog";

function Popup() {
  const [book, setBook] = useState([]);
  const [numPeople, setNumPeople] = useState("");
  const [time, setTime] = useState("");
  const [availSlots, setAvailSlots] = useState([]);
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/restaurant/getTables/${numPeople}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setAvailSlots([]);
        data.forEach((table) => {
          const slots = [];
          if (table.Slot_1__c) slots.push("12:00 PM");
          if (table.Slot_2__c) slots.push("01:00 PM");
          if (table.Slot_3__c) slots.push("02:00 PM");
          if (table.Slot_4__c) slots.push("06:00 PM", "07:00 PM", "08:00 PM");
          setAvailSlots((prev) => [...prev, ...slots]);
        });
      })
      .catch((error) => {
        console.error(error);
        // setError("Failed to fetch tables.");
      });
  }, [numPeople]);

  const handleBookNowClick = () => {
    if (!numPeople || !time) {
      setError("Please select number of people and time");
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/restaurant/reserve/${book[0].Id}/${time}`)
        .then(() => {
          console.log(`Booked a table for ${numPeople} people at ${time}`);
          setIsBooked(true);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to reserve table.");
        });
    }
  };

  const handleModalClose = () => {
    setNumPeople("");
    setTime("");
    setError("");
    setIsBooked(false);
  };

  useEffect(() => {
    if (numPeople) {
      setAvailSlots([]);
      setBook([]);
    } else {
      setAvailSlots([]);
      setBook([]);
    }
  }, [numPeople]);

  return (
    <Modal title="Book Table" onClose={handleModalClose}>
      <div className="flex w-full justify-between">
        <h2 className="font-bold pb-4">Book a Table</h2>
        <Modal.Close />
      </div>
      <div className="flex flex-col gap-2">
        {!isBooked && (
          <>
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
            {numPeople && (
              <>
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

                <button
                  className="primary-button mt-4"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                {error && <p className="text-red-500">{error}</p>}
              </>
            )}
          </>
        )}
        {isBooked && (
          <>
            <p className="text-green-500">Table reserved successfully!</p>
            <button className="primary-button mt-4" onClick={handleModalClose}>
              Book Again
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}

export default Popup;

//fetch


