import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { moderator, strategy, mechanism, precondition, barrier, proximal_outcome, distal_outcome } from "./shapes/shapes";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
  ];

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;
    

    distal_outcome(x, y);
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  const containerStyle ={
    display: 'block',
    textAlign: 'center',
  }
  const divStyle = {
    border: '1px solid #000',
    color:  'black',
    height: "50px"
  };  
  const div2Style = {
    border: '1px solid #000',
    color:  'black',
    height: "50px",
    borderRadius: "10px"
  };  
  const pStyle = {
    color:  'black',
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "12px",
    paddingBottom: "5px"
  };  

  return (
    <div className="main">
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Moderator</p>
        <div style={divStyle}></div>
      </div>
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Implementation strategy</p>
        <div style={div2Style}></div>
      </div>
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
