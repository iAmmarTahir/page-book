import React, { useState } from "react";
import "./header.css";
import HeaderButton from "../common/HeaderButton";
import Logo from "../p.png";

const Header = (props) => {
  const [title, setTitle] = useState("Untitled Document");
  const fileOptions = ["Open", "Save", "Download", "Make a Copy"];
  const exportOptions = ["To Google Drive", "To Dropbox"];
  const collaborateOptions = ["Collaborators", "Invite Others via Email"];
  const helpOptions = ["Accessbility", "Keyboard Shorcuts", "See Docs"];
  const userOptions = ["Logout"];
  return (
    <div className="wrap">
      <img src={Logo} style={{ width: "88px", height: "88px" }} />
      <input
        className="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="row">
        <div className="col-md-2">
          <HeaderButton name="File" options={fileOptions} />
        </div>
        <div className="col-md-2">
          <HeaderButton name="Export" options={exportOptions} />
        </div>
        <div className="col-md-2">
          <HeaderButton name="Collaborate" options={collaborateOptions} />
        </div>
        <div className="col-md-2">
          <HeaderButton name="Help" options={helpOptions} />
        </div>
        <div className="col-md-2"></div>
        {
          props.user.user.name  ? (
          <div className="col-md-2">
            <HeaderButton name={props.user.user.name} options={userOptions} action={props.user.setAuthenticated} />
          </div>): null
        }
      </div>
    </div>
  );
};

export default Header;
