import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./justify-button.css";
import { getIframeDocument } from "../../util";

const JustifyButton = ({ icon, name }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    getIframeDocument("editor").execCommand(name);
  };
  return (
    <div
      style={clicked ? { color: "#111" } : { color: "#ccc" }}
      className="justify-btn"
      onClick={() => handleClick()}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default JustifyButton;
