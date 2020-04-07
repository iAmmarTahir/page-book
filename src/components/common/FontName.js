import React from "react";
import { getIframeDocument } from "../../util";
const FontName = () => {
  return (
    <div className="text-size-wrap">
      <select
        className="size-selector"
        onChange={(e) => {
          getIframeDocument("editor").execCommand(
            "fontname",
            false,
            e.target.value
          );
        }}
      >
        <option>Arial</option>
        <option>Calibri</option>
        <option>Comic Sans MS</option>
        <option>Monospace</option>
        <option>Sans Serif</option>
      </select>
    </div>
  );
};

export default FontName;
