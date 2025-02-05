import Footer from "./views/footer";
import Navbar from "./views/Navbar/navbar";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <div className="App">
        <header className="App-header">Learn React</header>
      </div>
      <Footer />
    </>
  );
}

export default App;
