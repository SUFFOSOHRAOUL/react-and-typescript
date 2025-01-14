import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="FeedBack UI" />
      <div className="container">
        <FeedbackList feedback = {feedback} />
      </div>
    </>
  );
}
export default App;
