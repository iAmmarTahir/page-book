import React, { useState } from "react";
import { getIframeDocument } from "../../util";

import "./text-size.css";

const TextSize = () => {
  const [fontSize, setFontSize] = useState("3");
  const handleChange = (e) => {
    setFontSize(e.target.value);
    getIframeDocument("editor").execCommand("fontsize", false, e.target.value);
  };
  return (
    <div className="text-size-wrap">
      <select
        className="size-selector"
        value={fontSize}
        onChange={(e) => handleChange(e)}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
    </div>
  );
};

export default TextSize;
