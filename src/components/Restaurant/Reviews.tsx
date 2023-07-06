import { useState } from 'react';
import { MessageCircle, Star, ThumbsUp } from 'react-feather';
import Reviewpopup from '../../pages/Reviewpopup';
import AddReviewpopup from '../Restaurant/AddReview';
// import './'

const reviews = [
    {
        id: 1,
        name: "John Smith",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Great food and atmosphere! Highly recommend.",
        // rating:4,
        // helpfulCount: 12,
        // commentCount: 4,
    },
    {
        id: 2,
        name: "Jane Doe",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        // rating: 5,
        review: "The best restaurant in town! Amazing food and service.",
        // helpfulCount: 24,
        // commentCount: 6,
    },
    {
        id: 3,
        name: "Sam",
        profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
        // rating: 3,
        review: "Food was okay, but service could have been better.",
        // helpfulCount: 5,
        // commentCount: 1,
    },
    {
        id: 4,
        name: "Emily",
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        // rating: 5,
        review: "Incredible food and service! Highly recommend the steak.",
        // helpfulCount: 18,
        // commentCount: 3,
    },
    {
        id: 5,
        name: "Mark",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
        // rating: 2,
        review: "Disappointing experience. Food was cold and service was slow.",
        // helpfulCount: 3,
        // commentCount: 2,
    },
    {
        id: 6,
        name: "Sarah",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        // rating: 4,
        review: "Great selection of dishes and cocktails. Will definitely come back!",
        // helpfulCount: 10,
        // commentCount: 2,
    },
    {
        id: 7,
        name: "Tom",
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        // rating: 5,
        review: "Absolutely loved this place! Everything was perfect.",
        // helpfulCount: 22,
        // commentCount: 7,
    },
    {
        id: 8,
        name: "Maggie",
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
        // rating: 3,
        review: "Decent food, but the noise level was too high for my liking.",
        // helpfulCount: 7,
        // commentCount: 1,
    },
    {
        id: 9,
        name: "David",
        profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
        // rating: 4,
        review: "Overall a great experience. The staff was friendly and attentive.",
        // helpfulCount: 13,
        // commentCount: 4,
    },
    {
        id: 10,
        name: "Emma",
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
        // rating: 5,
        review: "The food was amazing and the prices were very reasonable. Highly recommend!",
        // helpfulCount: 16,
        // commentCount: 5,
    },
];

function Reviews() {
    // const [showReviewpopup, setShowReviewpopup] = useState(false);
    // const handleReviewClick = () => {
    //   setShowReviewpopup(true);
    // };

    // const handleClosePopup = () => {
    //   setShowReviewpopup(false);
    // };
    return (
        <div className="max-w-3xl m-auto max-md:px-4">
            <div className='flex justify-between'>
                <Header title={`${reviews.length} reviews`} />
                {/* <button className='primary-button self-center'onClick={handleReviewClick}>Add Review</button> */}
                {/* <Reviewpopup /> */}
            </div>
            {/* {showReviewpopup && (
        <AddReviewpopup onClose={handleClosePopup} />
      )} */}
            {
                reviews.slice(0, 10).map((review) => (
                    <div key={review.id} className="flex flex-col gap-4 border-b border-gray-200 py-4">
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-4">
                                    <img src={review.profilePic} alt={review.name} className="h-[50px] w-[50px] rounded-full" />
                                    <div>
                                        <div className="text-sm font-semi text-gray-700">{review.name}</div>
                                        {/* <div className="flex">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <span key={index}><Star size={20} stroke="transparent" fill="orange" /></span>
                      ))}
                      {Array.from({ length: 5 - review.rating }).map((_, index) => (
                        <span key={index}><Star size={20} stroke="transparent" fill="lightgrey" /></span>
                      ))}
                    </div> */}
                                    </div>
                                </div>
                                <div>
                                    "{review.review}"
                                </div>
                            </div>
                            <div className="flex gap-4 self-start text-xs">
                                {/* <span className='flex gap-2 items-center'>
                  <span><ThumbsUp size={20}/></span> 
                  <p>
                    {review.helpfulCount}
                  </p>
                </span> */}
                                {/* <span className='flex gap-2 items-center'>
                  <span><MessageCircle size={20}/></span>
                  <p>
                    {review.commentCount}
                  </p>
                </span> */}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Reviews;
