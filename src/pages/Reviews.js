import React from 'react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: "John Smith",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
    review: "Great food and atmosphere! Highly recommend.",
    helpfulCount: 12,
    commentCount: 4,
  },
  {
    id: 2,
    name: "Jane Doe",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review: "The best restaurant in town! Amazing food and service.",
    helpfulCount: 24,
    commentCount: 6,
  },
  {
    id: 3,
    name: "Sam",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 3,
    review: "Food was okay, but service could have been better.",
    helpfulCount: 5,
    commentCount: 1,
  },
  {
    id: 4,
    name: "Emily",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    review: "Incredible food and service! Highly recommend the steak.",
    helpfulCount: 18,
    commentCount: 3,
  },
  {
    id: 5,
    name: "Mark",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 2,
    review: "Disappointing experience. Food was cold and service was slow.",
    helpfulCount: 3,
    commentCount: 2,
  },
  {
    id: 6,
    name: "Sarah",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4,
    review: "Great selection of dishes and cocktails. Will definitely come back!",
    helpfulCount: 10,
    commentCount: 2,
  },
  {
    id: 7,
    name: "Tom",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    review: "Absolutely loved this place! Everything was perfect.",
    helpfulCount: 22,
    commentCount: 7,
  },
  {
    id: 8,
    name: "Maggie",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 3,
    review: "Decent food, but the noise level was too high for my liking.",
    helpfulCount: 7,
    commentCount: 1,
  },
  {
    id: 9,
    name: "David",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
    review: "Overall a great experience. The staff was friendly and attentive.",
    helpfulCount: 13,
    commentCount: 4,
  },
  {
    id: 10,
    name: "Emma",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    review: "The food was amazing and the prices were very reasonable. Highly recommend!",
    helpfulCount: 16,
    commentCount: 5,
  },
];

function Reviews() {
  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      {reviews.slice(0, 10).map((review) => (
        <div key={review.id} className="review">
          <div className="profile-info">
            <img src={review.profilePic} alt={review.name} className="profile-pic" />
            <div className="name">{review.name}</div>
          </div>
          <div className="rating-review-container">
            <div className="rating">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
              <span className="rating-number">{review.rating}/5</span>
            </div>
            <div className="review-text">{review.review}</div>
          </div>
          <div className="interactions">
            <button className="helpful">
              <span>&#128077;</span> {review.helpfulCount} Helpful
            </button>
            <button className="comment">
              {review.commentCount} Comment{review.commentCount > 1 && "s"}
            </button>
            <button className="share">
              <span>&#128279;</span> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
