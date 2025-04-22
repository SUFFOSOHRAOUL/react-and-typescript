import { NavLink } from "react-router-dom";
import "./navbar.css";
import Buttons from "../../components/Buttons/Buttons";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>PetDoc.</h1>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="#">About Us</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="#">Service</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="#">Doctors</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="#">Equipment</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="#">Charity</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="#">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <Buttons
            disabled={false}
            buttonText="Questionnaire"
            onClick={() => {}}
            color={ "#183dff"}
            textColor={"#ffffff"}
          />
          <Buttons
            disabled={false}
            buttonText="Free Call"
            onClick={() => {}}
            color={"#ffffff"}
            textColor={"#183dff"}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
