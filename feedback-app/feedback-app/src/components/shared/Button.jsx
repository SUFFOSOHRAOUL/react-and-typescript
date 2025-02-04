import React from "react";

function Button(props) {
  return (
    <div
      type={props.type}
      isDisabled={props.isDisabled}
      className={`btn btn-${props.version}`}
    >
      {props.children}
    </div>
  );
}
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
