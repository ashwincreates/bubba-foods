import React, { useState } from "react";
import "./Reviewpopup.css";

function Reviewpopup({ onClose, showCloseButton }) {
  const [commentType, setCommentType] = useState("");
  const [commentText, setCommentText] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleCommentTypeChange = (event) => {
    setCommentType(event.target.value);
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentType === "" || commentText === "") {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }

    // Show success message
    if (commentType === "feedback") {
      setMessageText("Thanks for the feedback");
    } else if (commentType === "complaint") {
      setMessageText("Sorry for the inconvenience, we will look into your complaint");
    } else if (commentType === "review") {
      setMessageText("Thanks for the review");
    }
    setShowMessage(true);

    // Close popup after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setShowMessage(false);
    onClose();
  };

  return (
    <>
      <div className="review-popup-container">
        <div className="review-popup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="comment-type">Comment Type:</label>
            <select id="comment-type" value={commentType} onChange={handleCommentTypeChange}>
              <option value="">--Select--</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="review">Review</option>
            </select>
            <label htmlFor="comment-text">Type Here:</label>
            <textarea id="comment-text" value={commentText} onChange={handleCommentTextChange}></textarea>
            {showError && (
              <p className="error-message">Please fill in both fields</p>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {showMessage && (
        <div className="review-popup-container">
          <div className="review-popup-message">
            <p>{messageText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Reviewpopup;
