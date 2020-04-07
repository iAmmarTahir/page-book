import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./toolbar-button.css";
import { getIframeDocument } from "../../util";

const ToolbarButton = ({ icon, name }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    getIframeDocument("editor").execCommand(name);
  };
  return (
    <div
      style={clicked ? { borderColor: "#111" } : { borderColor: "#ccc" }}
      className="toolbar-btn"
      onClick={() => handleClick()}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default ToolbarButton;
