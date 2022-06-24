import React from "react";
import "./popupWrapper.css";
export default (props) => {
  const { name, close, getPopName } = props;
  return (
    <div className="popup-bg">
      <div className="popup second">
        <div className="popup-head">
          <h2>{name && name}</h2>
          <span onClick={close} className="close"></span>
        </div>

        <div className="popup-body">{props.children}</div>
      </div>
    </div>
  );
};
