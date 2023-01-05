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
  };
  const pStyle = {
    color:  'black',
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "12px",
    paddingBottom: "5px"
  };  
  const rectStyle = {
    fill: "transparent",
    strokeWidth: 1,
    stroke: "rgb(0,0,0)"
  };

  return (
    <div className="main">
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Moderator</p>
        <svg width="100" height="100">
          <rect x="5" y="5" width="90" height="50" style={rectStyle} />
        </svg>
      </div>
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Implementation strategy</p>
        <svg width="100" height="100">
          <rect x="5" y="5" width="90" height="50" rx="10" ry="10" style={rectStyle} />
        </svg>
      </div>
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Precondition</p>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 300.000000 131.000000" preserveAspectRatio="xMidYMid ">
          <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)" fill="#1D1D1D" stroke="none">
            <path d="M699 1218 c-51 -89 -460 -793 -539 -928 -133 -226 -159 -275 -150
            -284 8 -8 2990 2 2990 11 0 2 -142 250 -316 551 -174 301 -342 591 -372 645
            l-57 97 -751 0 -752 0 -53 -92z m1549 50 c5 -7 45 -74 88 -148 42 -74 109
            -189 147 -255 38 -66 138 -239 222 -385 84 -146 175 -303 203 -350 28 -47 47
            -88 43 -93 -4 -4 -660 -6 -1459 -5 l-1451 3 180 310 c99 171 195 335 213 365
            18 30 100 171 182 312 l149 258 736 0 c577 0 739 -3 747 -12z" id="node1" stroke-width="20">
            </path>
          </g>
          <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)" fill="#9D9D9D" stroke="none">
          </g>
          <g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
            <path d="M757 1258 c-8 -13 -73 -124 -144 -248 -72 -124 -226 -389 -343 -588
            -116 -200 -214 -371 -217 -379 -5 -14 143 -15 1443 -8 797 4 1451 9 1453 11 2
            2 -10 25 -27 51 -16 26 -88 149 -159 273 -71 124 -218 379 -327 568 l-198 342
            -734 0 -734 0 -13 -22z" id="node9" stroke-width="20">
            </path>
          </g>
        </svg>
      </div>
      <div className="miro-draggable draggable-item" style={containerStyle}>
        <p style={pStyle}>Mechanism</p>
        <svg width="60" height="60" transform="rotate(-45 10, 5)">
          <rect x="5" y="5" width="50" height="50" style={rectStyle} />
        </svg>
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
