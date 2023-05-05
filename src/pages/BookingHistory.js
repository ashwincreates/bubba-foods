import React, { useState } from "react";
import "./BookingHistory.css";
import Reviewpopup from'./Reviewpopup';

function BookingHistory(props) {
  const [showReviewpopup, setShowReviewpopup] = useState(false);
  const handleReviewClick = () => {
    setShowReviewpopup(true);
  };

  const handleClosePopup = () => {
    setShowReviewpopup(false);
  };
  const [bookings, setBookings] = useState([
    {
      id: 1,
      restaurant: "Pizza Place",
      date: "2023-04-20",
      time: "12:30 PM",
      partySize: 4,
      tableNumber: 2,
    },
    {
      id: 2,
      restaurant: "Burger Joint",
      date: "2023-04-22",
      time: "7:00 PM",
      partySize: 2,
      tableNumber: 1,
    },
    {
      id: 3,
      restaurant: "Taco Spot",
      date: "2023-04-23",
      time: "1:00 PM",
      partySize: 3,
      tableNumber: 3,
    },
    {
      id: 4,
      restaurant: "Sushi House",
      date: "2023-04-25",
      time: "8:00 PM",
      partySize: 6,
      tableNumber: 4,
    },
  ]);

  const filteredBookings = bookings.filter(
    (booking) => booking.userId === props.loggedInUserId
  );

  return (
    <div className="">
      {filteredBookings.length > 0 ? (
        <table className="table-auto w-full">
          <thead className="border-b p-6">
            <tr>
              <th>Restaurant</th>
              <th>Date</th>
              <th>Time</th>
              <th>Number of Persons</th>
              <th>Table Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.restaurant}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.partySize}</td>
                <td>{booking.tableNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You have no booking history.</p>
      )}
                     <button className='primary-button self-center'onClick={handleReviewClick} style={{marginTop:'2rem', marginBottom:'2rem',marginLeft:'23rem'}}>Add Comment</button>
                        {showReviewpopup && (
        <Reviewpopup onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default BookingHistory;
