import React from "react";
import ReactDOM from "react-dom";

import Toolbar from "polotno/toolbar/toolbar";
import Workspace from "polotno/canvas/workspace";
import { createStore } from "polotno/model/store";

import { CustomSidePanel } from "./side-panel";
import { Preview } from "./preview";

import "./video-element";

const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.dev/cabinet
  key: "nFA5H9elEytDyPyvKL7T"
});

store.addPage();
// store.activePage.addElement({ type: "video" });

const App = ({ store }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw"
      }}
    >
      <div style={{ width: "400px", height: "100%", display: "flex" }}>
        <CustomSidePanel store={store} />
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          margin: "auto",
          flex: 1,
          flexDirection: "column",
          position: "relative"
        }}
      >
        <Toolbar store={store} />
        <Workspace store={store} />
        <Preview store={store} />
      </div>
    </div>
  );
};

ReactDOM.render(<App store={store} />, document.getElementById("root"));
