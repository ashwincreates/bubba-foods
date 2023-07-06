import React, { useState } from "react";
import Modal from "../Dialog/Dialog";

function ReviewPopup({ onClose }) {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting review data here
    onClose();
  };

  return (
    <div className="review-popup-container">
      <div className="review-popup">
        <h2>Review</h2>
        <form >
          <label htmlFor="review-text">Write your review:</label>
          <textarea
            id="review-text"
            value={review}
            onChange={handleReviewChange}
            rows="5"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewPopup;
