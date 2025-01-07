import Header from "./components/header";
import FeedbackItem from "./components/feedbackitem";
function App() {
  return (
    <>
      <Header text="FeedBack UI" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}
export default App;
