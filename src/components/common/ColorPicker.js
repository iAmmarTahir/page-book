import React, { useState } from "react";
import { SketchPicker } from "react-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIframeDocument } from "../../util";

import "./color-picker.css";

const ColorPicker = ({ iconName, name }) => {
  const [color, setColor] = useState("#111");
  const handleChange = (color) => {
    setColor(color.hex);
    getIframeDocument("editor").execCommand(name, false, color.hex);
  };
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      style={{ textAlign: "center" }}
      className="color-picker"
      onClick={() => handleClick()}
    >
      <FontAwesomeIcon
        style={{ fontSize: "1.1em", marginTop: "10px", marginLeft: "26px" }}
        icon={iconName}
      />
      {clicked ? (
        <SketchPicker color={color} onChangeComplete={handleChange} />
      ) : null}
    </div>
  );
};

export default ColorPicker;
