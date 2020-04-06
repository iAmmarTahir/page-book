import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";
import "./toolbar.css";
import { getIframeDocument } from "../../util";

const Toolbar = () => {
  return (
    <div className="toolbar-wrap">
      <FontAwesomeIcon
        icon={faUndo}
        onClick={() => {
          getIframeDocument("editor").execCommand("bold", false, null);
        }}
      />
    </div>
  );
};

export default Toolbar;
