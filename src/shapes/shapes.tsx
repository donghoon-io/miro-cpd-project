import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

export function moderator(x, y) {
  const description = miro.board.createText({
    content: '<p>A factor that strengthens or weakens the relationship between the strategy and mechanism</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-85,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Moderator</b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
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
    width: 150,
    height: 75,
  });
}

export function strategy(x, y) {
  const description = miro.board.createText({
    content: '<p>A specific and operationally defined implementation strategy</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-85,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Implementation strategy</b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'round_rectangle',
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
    width: 150,
    height: 75,
  });
}

export function mechanism(x, y) {
  const description = miro.board.createText({
    content: '<p>How or why the strategy works to resolve the barrier</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-90,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Mechanism</b>',
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

  const shape = miro.board.createShape({
    shape: 'rhombus',
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
    width: 100,
    height: 100,
  });
}

export function precondition(x, y) {
  const description = miro.board.createText({
    content: '<p>A factor that is necessary for the mechanism to be activated and subsequent causal events to occur</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Precondition for mechanism activation</b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'trapezoid',
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
    width: 150,
    height: 75,
  });
}

export function barrier(x, y) {
  const description = miro.board.createText({
    content: '<p>The problem that a strategy is intended to resolve</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-90,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Barrier</b>',
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

  const shape = miro.board.createShape({
    shape: 'pentagon',
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
    width: 100,
    height: 100,
  });
}

export function proximal_outcome(x, y) {
  const description = miro.board.createText({
    content: '<p>The earliest signs of change in the mechanism, barrier, or precursors to the distal outcome</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Proximal outcome</b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-65,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'circle',
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
    width: 100,
    height: 100,
  });
}

export function distal_outcome(x, y) {
  const description = miro.board.createText({
    content: '<p>The desired implementation outcome</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b>Distal implementation outcome</b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-70,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'circle',
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
    width: 100,
    height: 100,
  });
}