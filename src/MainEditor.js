import React, { Component } from 'react';
import Editor from "./components/editor/Editor";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";

const MainEditor = (props) => {
    console.log(props)
    return (
        <>
            <Header user={props.user}/>
            <Toolbar />
            <div style={{ backgroundColor: "#ccc", width: "100%" }}>
            <Editor />
            </div>
        </>  
    );
}
 
export default MainEditor;