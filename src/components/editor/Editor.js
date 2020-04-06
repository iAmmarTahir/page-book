import React, { Component } from "react";
import { getIframeDocument } from "../../util";
import "./editor.css";

class Editor extends Component {
  componentDidMount() {
    getIframeDocument("editor").designMode = "on";
  }
  render() {
    return (
      <div>
        <iframe id="editor" name="editor" className="main" />
      </div>
    );
  }
}

export default Editor;
