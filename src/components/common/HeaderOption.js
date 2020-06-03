import React from "react";
import "./header-option.css";
const HeaderOption = ({ option, action }) => {
  return <div className="header-option" onClick={() => {action(false); localStorage.removeItem('token')}}>{option}</div>;
};

export default HeaderOption;
