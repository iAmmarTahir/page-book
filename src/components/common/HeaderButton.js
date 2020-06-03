import React, { useState } from "react";
import "./header-button.css";
import HeaderOption from "./HeaderOption";

const styleSheet = {
  show: {
    display: "block",
  },
  notShow: {
    display: "none",
  },
};

const HeaderButton = ({ name, options, action }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="header-btn">
      <div
        className="btn-txt-wrap"
        style={clicked ? { backgroundColor: "rgb(210,227,252)" } : null}
        onClick={() => setClicked(!clicked)}
      >
        <span className="btn-txt">{name}</span>
      </div>
      <div
        className="options"
        style={clicked ? styleSheet.show : styleSheet.notShow}
      >
        {options.map((option) => (
          <HeaderOption key={option} option={option} action={action} />
        ))}
      </div>
    </div>
  );
};

export default HeaderButton;
