import React from "react";
import Editor from "./components/editor/Editor";
import Header from "./components/header/Header";
import Toolbar from "./components/toolbar/Toolbar";

const App = () => {
  return (
    <div>
      <Header />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default App;
