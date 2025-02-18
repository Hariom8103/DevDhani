import React from "react";
import "./Review.css";

const reviews = [
  {
    name: "Ravi Sharma",
    rating: 5,
    comment:
      "Amazing ambiance and delicious food! The traditional Rajasthani thali was a delight. Highly recommend for an authentic experience."
  },
  {
    name: "Priya Mehta",
    rating: 4,
    comment: "Great food and friendly staff. The service was a bit slow, but overall a good experience."
  },
  {
    name: "Amit Verma",
    rating: 5,
    comment:
      "Loved the cultural vibes and the folk music performance. The food was flavorful and fresh. Would definitely visit again!"
  },
  {
    name: "Neha Kapoor",
    rating: 3,
    comment: "The food was good, but the seating arrangement could be improved. It was a bit crowded during peak hours."
  },
  {
    name: "Rahul Singh",
    rating: 5,
    comment: "Best Rajasthani food I’ve ever had! The Dal Baati Churma was simply outstanding."
  },
  {
    name: "Vaibhav Makvana",
    rating: 4.5,
    comment: "Best Rajasthani food I’ve ever had! The Dal Baati Churma was simply outstanding."
  }
];

const Review = () => {
  return (
    <div className="review-page">
      <h1>Dev Dhani Restaurant - Customer Reviews</h1>
      <p>We value your feedback and appreciate your time in sharing your experience with us.</p>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{"⭐".repeat(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <button className="submit-btn">Submit Your Review</button>
    </div>
  );
};

export default Review;
