import React from "react";
import "./Buttons.css";
function Buttons({ buttonText, onClick, disabled, color, textColor }) {
  const buttonStyle = {
    backgroundColor:color,
    color: textColor,
    padding: " 10px 30px",
    border: "2px solid #ffffff",
    margin: " 10px",
    borderRadius: " 50px",
    cursor: "pointer",
  };
  return (
    <div>
      <button
        style={buttonStyle}
        conClick={onClick}
        disabled={disabled}
        className="button"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Buttons;
