import React from "react";

import "./toolbar.css";

import ToolbarButton from "../common/ToolbarButton";
import {
  faBold,
  faItalic,
  faUnderline,
  faTint,
  faFillDrip,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
} from "@fortawesome/free-solid-svg-icons";
import TextSize from "../common/TextSize";
import ColorPicker from "../common/ColorPicker";
import JustifyButton from "../common/JustifyButton";
import FontName from "../common/FontName";

const Toolbar = () => {
  return (
    <div className="toolbar-wrap">
      <div className="row">
        <div className="col-md-2">
          <div
            className="row"
            style={{ borderRight: "1px solid #ccc", paddingBottom: "10px" }}
          >
            <div className="col-md-4">
              <ToolbarButton icon={faBold} name="bold" />
            </div>
            <div className="col-md-4">
              <ToolbarButton icon={faItalic} name="italic" />
            </div>
            <div className="col-md-4">
              <ToolbarButton icon={faUnderline} name="underline" />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-5">
              <TextSize />
            </div>
            <div className="col-7">
              <FontName />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div
            className="row"
            style={{ borderRight: "1px solid #ccc", paddingBottom: "10px" }}
          >
            <div className="col-md-3">
              <JustifyButton icon={faAlignLeft} name="justifyleft" />
            </div>
            <div className="col-md-3">
              <JustifyButton icon={faAlignCenter} name="justifycenter" />
            </div>
            <div className="col-md-3">
              <JustifyButton icon={faAlignRight} name="justifyright" />
            </div>
            <div className="col-md-3">
              <JustifyButton icon={faAlignJustify} name="justifyfull" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <ColorPicker iconName={faTint} name="forecolor" />
        </div>
        <div className="col-1" style={{ borderRight: "1px solid #ccc" }}></div>
        <div className="col-2">
          <ColorPicker iconName={faFillDrip} name="backcolor" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
