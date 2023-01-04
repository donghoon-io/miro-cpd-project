import React, { useEffect } from "react";
import ReactDOM from "react-dom";

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

    const text = await miro.board.createText({
      content: '<p>Moderator</p>',
      style: {
        color: '#000', // Default value: #1a1a1a (black)
        fillColor: 'transparent', // Default value: transparent (no fill)
        fillOpacity: 1, // Default value: 1 (solid color)
        fontFamily: 'arial', // Default font type for the text
        fontSize: 14, // Default font size
        textAlign: 'center', // Default alignment: left
      },
      x: x,
      y: y-60,
      width: 200,
    });

    const shape = await miro.board.createShape({
      shape: 'rectangle',
      style: {
        color: '#000', // Default text color: '#1a1a1a' (black)
        fillColor: 'transparent', // Default shape fill color: transparent (no fill)
        fontFamily: 'arial', // Default font type for the text
        fontSize: 14, // Default font size for the text, in dp
        textAlign: 'center', // Default horizontal alignment for the text
        textAlignVertical: 'middle', // Default vertical alignment for the text
        borderStyle: 'normal', // Default border line style
        borderOpacity: 1.0, // Default border color opacity: no opacity
        borderColor: '#000', // Default border color: '#ffffff` (white)
        borderWidth: 1, // Default border width
        fillOpacity: 1.0, // Default fill color opacity: no opacity
      },
      x: x, // Default value: center of the board
      y: y, // Default value: center of the board
      width: 200,
      height: 100,
    });
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
