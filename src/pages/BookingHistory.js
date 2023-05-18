import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./BookingHistory.css";
import Reviewpopup from './Reviewpopup';

const slots = {
    1: "12:00 PM",
    2: "1:00 PM",
    3: "2:00 PM",
    4: "6:00 PM"
}

function BookingHistory(props) {

    const [showReviewpopup, setShowReviewpopup] = useState(false);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [booking, setBookings] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/reserve/get/${user.Id}`)
            .then(response => response.json())
            .then(data => {
                setBookings(data)
            })
    }, [user.Id])

    const handleReviewClick = (bookingId) => {
        setSelectedBookingId(bookingId);
        setShowReviewpopup(true);
    };

    const handleClosePopup = () => {
        setSelectedBookingId(null);
        setShowReviewpopup(false);
    };

    return (
        <div className="">
            {booking.length > 0 ? (
                <table className="table-auto w-full">
                    <thead className="border-b p-6">
                        <tr>
                            <th>Restaurant</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Number of Persons</th>
                            <th>Table Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map((booking) => (
                            <tr key={booking.Id}>
                                <td>{booking.restaurant}</td>
                                <td>{booking.Date__c}</td>
                                <td>{slots[booking.Slot__c]}</td>
                                <td>{booking.partySize}</td>
                                <td>{booking.tableNumber}</td>
                                <td>
                                    <button
                                        className='primary-button'
                                        onClick={() => handleReviewClick(booking.id)}
                                    >
                                        Add Comment
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>You have no booking history.</p>
            )}
            {showReviewpopup && selectedBookingId !== null && (
                <Reviewpopup
                    bookingId={selectedBookingId}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}

export default BookingHistory;
