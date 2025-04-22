import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import "./footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="head">
        <p className="h1">
          Always happy to help <br /> your friend
        </p>
        <Buttons
          disabled={false}
          buttonText="Free Call"
          onClick={() => {}}
          color={"#ffffff"}
          textColor={"#183dff"}
        />
      </div>

      <div className="fbody">
        <div className="section">
          <h1>About Us</h1>
          <p>Address</p>
          <p>Connection</p>
        </div>
        <div className="section">
          <h1>Services</h1>
          <p>Dentisty</p>
          <p>Documentation</p>
          <p>Vaccination</p>
          <p>Surgery</p>
          <p>Consultation</p>
          <p>Newborns</p>
        </div>
        <div className="section">
          <h1>Doctors</h1>
          <p>Specialist</p>
          <p>Licenses</p>
          <p>Practice</p>
          <p>Vacancies</p>
        </div>
        <div className="section">
          <h1>Equipment</h1>
          <p>Certificates</p>
          <p>Exploitation</p>
        </div>
        <div className="section">
          <h1>Promotion</h1>
          <p>Partners</p>
          <p>Achievements</p>
        </div>
        <div className="section">
          <h1>Reviews</h1>
          <p>Our clients</p>
          <p>On plaforms</p>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <h2>© copyright | All Rights Reserved.</h2>
        <div className="icons">
          <FaFacebook size={35}  />
          <FaInstagram size={35} />
          <FaLinkedin size={35} />
          <FaTelegram size={35} />
        </div>
        <h2>Terms of Use | Privacy</h2>
      </div>
    </div>
  );
}

export default Footer;
