import React from "react";
import FeedbackItem from "./feedbackitem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No FeeddBack Yet </p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key = {item.id} item = {item} />
      ))}
    </div>
  );
}

export default FeedbackList;
